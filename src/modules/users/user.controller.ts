import { UserService } from "./user.service";

export class UserController {
  private userService;
  constructor(userService: UserService) {
    this.userService = userService;
  }

  find = async (req, res) => {
    const users = await this.userService.find();
    return res.status(200).json(users);
  };
}
