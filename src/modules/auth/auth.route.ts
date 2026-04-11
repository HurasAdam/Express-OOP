import { Router } from "express";
import UserModel from "../users/user.model";
import { AuthController } from "./auth.controller";
import { AuthRepository } from "./auth.repository";
import { AuthService } from "./auth.service";

export const authRoutes = Router();

/**
 * prefix
 * /auth
 */
const repository = new AuthRepository(UserModel);
const service = new AuthService(repository);
const controller = new AuthController(service);

authRoutes.post("/login", controller.login);
authRoutes.post("/register", controller.register);
