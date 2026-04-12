import { Router } from "express";
import UserModel from "../users/user.model";
import { UserRepository } from "../users/user.repository";

const adminRoutes = Router();

/**
 * prefix
 * /admin
 */

const userRepository = new UserRepository(UserModel);

adminRoutes.post("/create-account");
