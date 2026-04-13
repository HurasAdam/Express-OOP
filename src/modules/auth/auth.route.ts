import { Router } from "express";
import SessionModel from "../sessions/session.model";
import { SessionRepository } from "../sessions/session.repository";
import UserModel from "../users/user.model";
import { UserRepository } from "../users/user.repository";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

export const authRoutes = Router();

/**
 * prefix
 * /auth
 */
const userRepository = new UserRepository(UserModel);
const sessionRepository = new SessionRepository(SessionModel);

const service = new AuthService(userRepository, sessionRepository);
const controller = new AuthController(service);

authRoutes.get("/me", controller.findMe);
authRoutes.get("/login", controller.login);
authRoutes.get("/logout", controller.logout);
