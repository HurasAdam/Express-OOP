import { IRoleRepository } from "../roles/domain/role.repository.interface";
import { IUserRepository } from "../users/domain/user.repository.interface";
import { AdminService } from "./application/admin.service";
import { AdminController } from "./presentation/admin.controller";

interface deps {
  userRepository: IUserRepository;
  roleRepository: IRoleRepository;
}

export function createAdminModule(deps: deps) {
  const service = new AdminService(deps.userRepository, deps.roleRepository);
  const controller = new AdminController(service);

  return {
    controller,
  };
}
