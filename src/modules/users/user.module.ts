/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { UserService } from "./application/user.service";
import { IUserRepository } from "./domain/user.repository.interface";
import { UserController } from "./presentation/user.controller";

interface deps {
  userRepository: IUserRepository;
}

export function createUserModule(deps: deps) {
  const service = new UserService(deps.userRepository);
  const controller = new UserController(service);

  return {
    controller,
  };
}
