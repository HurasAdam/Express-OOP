import AppErrorCode from "../../../constants/appErrorCode";
import { CONFLICT } from "../../../constants/http";
import appAssert from "../../../utils/appAssert";
import { PERMISSIONS_METADATA } from "../constants/permission-metadata";
import { IRoleRepository } from "../domain/role.repository.interface";
import { CreateRoleDto } from "../dto/create-role.dto";
import { FindRolesQueryDto } from "../dto/find-role.query.dto";

export class RoleService {
  private roleRepository;
  constructor(roleRepository: IRoleRepository) {
    this.roleRepository = roleRepository;
  }

  async create(payload: CreateRoleDto) {
    const existing = await this.roleRepository.findOneByName(payload.name);
    appAssert(
      !existing,
      CONFLICT,
      "Role with that name already exists",
      AppErrorCode.DuplicateRoleName,
    );

    this.roleRepository.create(payload);
  }

  async find(query: FindRolesQueryDto) {
    return this.roleRepository.find(query);
  }

  getPermissions() {
    return PERMISSIONS_METADATA;
  }
}
