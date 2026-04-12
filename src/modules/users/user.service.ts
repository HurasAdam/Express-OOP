import { CreateUserDto } from "./dto/create-user.dto";
import { UserRepository } from "./user.repository";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(data: CreateUserDto) {
    return await this.userRepository.create({
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
    });
  }

  async find() {
    return await this.userRepository.find();
  }

  async findOne(userId: string) {
    return await this.userRepository.findOneById(userId);
  }
}
