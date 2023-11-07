import { userService } from "../service/user-service";

import { nextTick } from "process";
import express, { Response } from "express";
import { NextFunction, Request } from "express";
export let router = express.Router();

router.post(
  "/api/users",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password, full_name, role } = req.body;
      const userData = await userService.registrationUser({
        email,
        password,
        full_name,
        role,
      });

      return res.status(200).send(userData);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/api/users/all",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await userService.getAllUsers();
      return res.status(200).send(user);
    } catch (e) {
      next(e);
    }
  }
);
router.put(
  "/api/user:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { email, password, full_name, role } = req.body;
    console.log(id);
    try {
      const user = await userService.putOneUser({
        id,
        email,
        password,
        full_name,
        role,
      });

      return res.status(200).send(user);
    } catch (e) {
      next(e);
    }
  }
);
