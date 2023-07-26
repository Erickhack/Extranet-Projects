import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/roles/user-roles.model";

interface UserCreationAttr {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttr> {
  @ApiProperty({
    example: "Микаил",
    description: "Имя",
  })
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  firstName: string;

  @ApiProperty({
    example: "Евлоевски",
    description: "Фамилия",
  })
  @Column({
    type: DataType.STRING(255),
  })
  lastName: string;

  @ApiProperty({
    example: "exapmple@gamil.com",
    description: "Почта",
  })
  @Column({
    type: DataType.STRING(255),
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: "1234567890",
    description: "Пароль",
  })
  @Column({ type: DataType.STRING(64), allowNull: false })
  password: string;

  @ApiProperty({
    example: false,
    description: "Бан",
  })
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  banned: boolean;

  @ApiProperty({
    example: "Мат",
    description: "Причина бана",
  })
  @Column({ type: DataType.STRING(100) })
  basReason: string;

  @ApiProperty({
    example: "USER",
    description: "Роль",
  })
  @BelongsToMany(() => Role, () => UserRoles)
  role: Role[];
}
