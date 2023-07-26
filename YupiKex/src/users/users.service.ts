import { Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "src/roles/roles.service";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepasitory: typeof User,
    private roleService: RolesService
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepasitory.create(dto as any);
    const role = await this.roleService.getRoleByValue("USER");
    await user.$set("role", [role.id]);
    return user;
  }
  async getAllUsers() {
    const users = await this.userRepasitory.findAll({ include: { all: true } });
    return users;
  }
}
