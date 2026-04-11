import { UserRepository } from "./user.repository";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  find = () => {
    const users = this.userRepository.find();
    return users;
  };
}
