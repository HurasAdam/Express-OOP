import catchErrors from "../../utils/catchErrors";
import {
  getAccessTokenCookieOptions,
  getRefreshTokenCookieOptions,
} from "../../utils/cookies";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/login-user.dto";

export class AuthController {
  private service;
  constructor(authService: AuthService) {
    this.service = authService;
  }

  login = catchErrors(async ({ body }, res) => {
    const payload: LoginUserDto = body;
    const serviceResponse = await this.service.login(payload);

    res.cookie(
      "accessToken",
      serviceResponse.accessToken,
      getAccessTokenCookieOptions(),
    );
    res.cookie(
      "refreshToken",
      serviceResponse.refreshToken,
      getRefreshTokenCookieOptions(),
    );

    return res.status(200).json(serviceResponse.user);
  });

  findMe = catchErrors(async (req, res) => {
    const user = await this.service.me("69d96c62486202e673deb59f");
    return res.status(200).json(user);
  });

  logout = catchErrors(async (req, res) => {});
}
