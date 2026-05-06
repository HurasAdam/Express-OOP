/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { RoleService } from "./application/role.service";
import RoleModel from "./infrastructure/mongoose/role.model";
import { RoleRepository } from "./infrastructure/mongoose/role.repository";
import { RoleController } from "./presentation/role.controller";

export function createRoleModule() {
  const repository = new RoleRepository(RoleModel);
  const service = new RoleService(repository);
  const controller = new RoleController(service);

  return {
    controller,
    repository,
  };
}
