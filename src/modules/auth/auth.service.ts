import AppErrorCode from "../../constants/appErrorCode";
import { FORBIDDEN, UNAUTHORIZED } from "../../constants/http";
import appAssert from "../../utils/appAssert";
import { refreshTokenSignOptions, signToken } from "../../utils/jwt";
import { SessionRepository } from "../sessions/session.repository";
import { UserRepository } from "../users/user.repository";
import { LoginUserDto } from "./dto/login-user.dto";

export class AuthService {
  private userRepository: UserRepository;
  private sessionRepository: SessionRepository;
  constructor(
    userRepository: UserRepository,
    sessionRepository: SessionRepository,
  ) {
    this.userRepository = userRepository;
    this.sessionRepository = sessionRepository;
  }

  async login(payload: LoginUserDto) {
    const user = await this.userRepository.findByEmailWithRole(payload.email);
    appAssert(
      user,
      UNAUTHORIZED,
      "Invalid email or password",
      AppErrorCode.InvalidCredentials,
    );

    const isValid = user.comparePassword(payload.password);
    appAssert(
      isValid,
      UNAUTHORIZED,
      "Invalid email or password",
      AppErrorCode.InvalidCredentials,
    );
    appAssert(
      user.isActive,
      FORBIDDEN,
      "Account is disabled",
      AppErrorCode.AccountDisabled,
    );

    // if valid crednetials
    user.lastLogin = new Date();
    await user.save();
    const userId = user._id;

    const session = await this.sessionRepository.create(userId);
    const sessionInfo = {
      sessionId: session._id,
    };

    const refreshToken = signToken(sessionInfo, refreshTokenSignOptions);
    const accessToken = signToken({
      ...sessionInfo,
      userId,
    });

    return {
      user: user.omitPassword(),
      accessToken,
      refreshToken,
    };
  }

  async me(id: string) {
    const user = await this.userRepository.findOneById(id);
    return {
      id: user._id,
      name: user.name,
      surname: user.surname,
      email: user.email,
    };
  }
}
