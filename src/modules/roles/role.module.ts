/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { RoleService } from "./application/role.service";
import { IRoleRepository } from "./domain/role.repository.interface";
import { RoleController } from "./presentation/role.controller";

interface deps {
  roleRepository: IRoleRepository;
}

export function createRoleModule(deps: deps) {
  const service = new RoleService(deps.roleRepository);
  const controller = new RoleController(service);

  return {
    controller,
  };
}
