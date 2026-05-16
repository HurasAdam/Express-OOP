/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { SessionService } from "./application/session.service";
import { ISessionRepository } from "./domain/session.repository.interface";
import { SessionController } from "./presentation/session.controller";

interface deps {
  sessionRepository: ISessionRepository;
}

export function createSessionModule(deps: deps) {
  const service = new SessionService(deps.sessionRepository);
  const controller = new SessionController(service);

  return {
    controller,
  };
}
