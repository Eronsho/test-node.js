import { UserDto, UserDtoattrib } from "./../dtos/user-dto";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import { User } from "../models/User";

import { ApiError } from "../exceptions/api-error";
import axios from "axios";

class UserService {
  async registrationUser({
    email,
    password,
    full_name,
    role,
  }: {
    email: string;
    password: string;

    full_name: string;
    role: string;
  }) {
    try {
      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
        throw ApiError.BadRequest(
          `Пользователь с почтовым адресом ${email} уже существует`
        );
      }
      const hashPassword = await bcrypt.hash(password, 3);
      const id = uuidv4(); // v34fa-asfasf-142saf-sa-asf
      const activationLink = uuidv4();
      const user = await User.create({
        id,
        email,
        password: hashPassword,
        full_name,
        role,
      });
      await axios.post("http://localhost:3000/logs/api", {
        userId: id,
        operation: "add",
      });

      const userDto = new UserDto(user); // id, email, isActivated

      return { user: userDto };
    } catch (error) {
      throw ApiError.BadRequest(error);
    }
  }

  async getAllUsers() {
    try {
      const users = await User.findAll();
      console.log(users);

      return users;
    } catch (error) {
      throw ApiError.BadRequest(error);
    }
  }
  async getOneUser(idUser) {
    const user = await User.findOne({ where: { id: idUser } });
    return user;
  }
  async putOneUser({
    id,
    email,
    password,
    full_name,
    role,
  }: {
    id: string;
    email: string;
    password: string;
    full_name: string;
    role: string;
  }) {
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await User.update(
      {
        email: email,
        full_name: full_name,
        role: role,
        password: hashPassword,
      },
      { where: { id: id } }
    );
    await axios.post("http://localhost:3000/logs/api", {
      userId: id,
      operation: "put",
    });

    return user;
  }
}

export const userService = new UserService();
