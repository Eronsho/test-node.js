import { DataTypes } from "sequelize";

import { sequelize } from "../db";
import { UserInstance } from "../interfaces/user";

export const User = sequelize.define<UserInstance>(
  "User",
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    full_name: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    role: {
      allowNull: false,
      type: DataTypes.TEXT,
    },

    email: {
      allowNull: true,
      type: DataTypes.TEXT,
      unique: true,
    },
    password: { allowNull: true, type: DataTypes.TEXT },
  },
  {}
);
