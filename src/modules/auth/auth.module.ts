import { ISessionRepository } from "../sessions/domain/session.repository.interface";
import { IUserRepository } from "../users/domain/user.repository.interface";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

export function createAuthModule(deps: {
  userRepository: IUserRepository;
  sessionRepository: ISessionRepository;
}) {
  const service = new AuthService(deps.userRepository, deps.sessionRepository);
  const controller = new AuthController(service);

  return {
    controller,
    service,
  };
}
