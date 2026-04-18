import { AuthMiddleware } from "../../middleware/authGuard";
import SessionModel from "../sessions/session.model";
import { SessionRepository } from "../sessions/session.repository";
import UserModel from "../users/user.model";
import { UserRepository } from "../users/user.repository";
import { AuthService } from "./auth.service";

const userRepository = new UserRepository(UserModel);
const sessionRepository = new SessionRepository(SessionModel);
export const authService = new AuthService(userRepository, sessionRepository);
export const authGuard = new AuthMiddleware(authService);
