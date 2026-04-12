import catchErrors from "../../utils/catchErrors";
import { AuthService } from "./auth.service";

export class AuthController {
  private service;
  constructor(authService: AuthService) {
    this.service = authService;
  }

  login = catchErrors(async (req, res) => {
    return res.status(200).json("USER HERE");
  });

  findMe = catchErrors(async (req, res) => {
    const user = await this.service.findMe("69d96c62486202e673deb59f");
    return res.status(200).json(user);
  });
}
