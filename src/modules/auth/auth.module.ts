import { ISessionRepository } from "../sessions/domain/session.repository.interface";
import { IUserRepository } from "../users/domain/user.repository.interface";
import { AuthService } from "./application/auth.service";
import { AuthController } from "./presentation/auth.controller";

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
