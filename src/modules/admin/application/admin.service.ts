import AppErrorCode from "../../../constants/appErrorCode";
import { CONFLICT, NOT_FOUND } from "../../../constants/http";
import appAssert from "../../../utils/appAssert";
import { IRoleRepository } from "../../roles/domain/role.repository.interface";
import { IUserRepository } from "../../users/domain/user.repository.interface";
import { CreateUserDto } from "../../users/dto/create-user.dto";

export class AdminService {
  private userRepository: IUserRepository;
  private roleRepository: IRoleRepository;
  constructor(
    userRepository: IUserRepository,
    roleRepository: IRoleRepository,
  ) {
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
  }

  async create(data: CreateUserDto) {
    const role = await this.roleRepository.findOneById(data.role);
    appAssert(role, NOT_FOUND, "Role not found", AppErrorCode.NotFound);

    const existingUser = await this.userRepository.findOneByEmail(data.email);

    appAssert(!existingUser, CONFLICT, "Email already taken");

    return this.userRepository.create({
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
      role: role.id,
    });
  }
}
