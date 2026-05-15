/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { IRoleRepository } from "../roles/domain/role.repository.interface";
import { ISessionRepository } from "../sessions/domain/session.repository.interface";
import { IUserRepository } from "../users/domain/user.repository.interface";
import { AuthService } from "./application/auth.service";
import { AuthController } from "./presentation/auth.controller";

export function createAuthModule(deps: {
  userRepository: IUserRepository;
  sessionRepository: ISessionRepository;
  roleRepository: IRoleRepository;
}) {
  const service = new AuthService(
    deps.userRepository,
    deps.sessionRepository,
    deps.roleRepository,
  );
  const controller = new AuthController(service);

  return {
    controller,
    service,
  };
}
