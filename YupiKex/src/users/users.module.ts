import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { User } from "./users.model";
import { UsersService } from "./users.service";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/roles/user-roles.model";
import { RolesModule } from "src/roles/roles.module";

@Module({
  controllers: [UsersController],
  imports: [SequelizeModule.forFeature([User, Role, UserRoles]), RolesModule],
  providers: [UsersService],
})
export class UsersModule {}
