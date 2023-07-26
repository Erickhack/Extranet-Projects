import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "", description: "Имя" })
  readonly firstName: string;

  @ApiProperty({ example: "", description: "Фамилия" })
  readonly lastName?: string;

  @ApiProperty({ example: "", description: "Почта" })
  readonly email: string;

  @ApiProperty({ example: "", description: "Пароль" })
  readonly password: string;

  @ApiProperty({ example: false, description: "Бан" })
  readonly banned: boolean;

  @ApiProperty({ example: "", description: "Причина бана" })
  readonly basReason?: string;
}
