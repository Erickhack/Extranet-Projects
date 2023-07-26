import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./roles/user-roles.model";

interface RoleCreationAttr {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttr> {
  @Column({
    type: DataType.STRING(255),
    unique: true,
    allowNull: false,
  })
  value: string;

  @Column({ type: DataType.STRING(64), allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
