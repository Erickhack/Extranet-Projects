import { Post, Body, Get, Param } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { RolesService } from "./roles.service";

@Controller("roles")
export class RolesController {
  constructor(private roleService: RolesService) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    this.roleService.createRole(dto);
  }

  @Get(":value")
  getById(@Param("value") value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
