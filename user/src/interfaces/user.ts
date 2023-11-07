import { BuildOptions, DataTypes, Model, Optional, Sequelize } from "sequelize";
import { Options } from "sequelize";

interface UserAttributes {
  id: string;
  email: string;
  password: string;
  full_name: string;
  role: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
