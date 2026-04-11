import { AuthService } from "./auth.service";

export class AuthController {
  private service;
  constructor(authService: AuthService) {
    this.service = authService;
  }

  login = async () => {};

  register = async (req, res) => {
    console.log("REGISTER CHECK", req.body);
    const data = req.body;
    await this.service.register(data);
    return res.status(201).json({
      message: "registered",
    });
  };
}
