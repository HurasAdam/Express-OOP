import { Router } from "express";
import UserModel from "../users/user.model";
import { UserRepository } from "../users/user.repository";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

export const authRoutes = Router();

/**
 * prefix
 * /auth
 */
const repository = new UserRepository(UserModel);
const service = new AuthService(repository);
const controller = new AuthController(service);

authRoutes.get("/me", controller.findMe);
authRoutes.get("/login", controller.login);
