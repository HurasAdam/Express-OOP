import { AuthRepository } from "./auth.repository";

export class AuthService {
  private repository;
  constructor(authRepository: AuthRepository) {
    this.repository = authRepository;
  }

  async findUserByEmail(email: string) {
    return this.repository.findUserByEmail(email);
  }

  async register(data: any) {
    const { name, surname, email, password } = data;
    const user = await this.repository.findUserByEmail(data.email);
    if (user) throw new Error("Email already taken");
    return this.repository.createUser({
      name,
      surname,
      email,
      password,
    });
  }
}
