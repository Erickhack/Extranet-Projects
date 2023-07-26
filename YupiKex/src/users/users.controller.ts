import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { User } from "./users.model";

@Controller("users")
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @ApiOperation({
    summary: "Создание пользывателя",
  })
  @ApiResponse({
    status: 200,
    type: User,
  })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.UsersService.createUser(userDto);
  }

  @ApiOperation({
    summary: "Получения всех пользывателей",
  })
  @ApiResponse({
    status: 200,
    type: [User],
  })
  @Get()
  getAll() {
    return this.UsersService.getAllUsers();
  }
}
