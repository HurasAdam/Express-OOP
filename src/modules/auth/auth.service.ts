import { UserRepository } from "../users/user.repository";

export class AuthService {
  private repository;
  constructor(userRepository: UserRepository) {
    this.repository = userRepository;
  }

  async findMe(id: string) {
    const user = await this.repository.findOneById(id);
    return {
      id: user._id,
      name: user.name,
      surname: user.surname,
      email: user.email,
    };
  }
}
