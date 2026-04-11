import { UserRepository } from "./user.repository";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async find() {
    return await this.userRepository.find();
  }

  async findOne(userId: string) {
    return await this.userRepository.findOneById(userId);
  }
}
