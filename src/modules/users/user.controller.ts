import { validateObjectIdParam } from "../../common/dto/param-id.dto";
import catchErrors from "../../utils/catchErrors";
import { UserService } from "./user.service";

export class UserController {
  private service;
  constructor(userService: UserService) {
    this.service = userService;
  }

  find = async (req, res) => {
    const users = await this.service.find();
    return res.status(200).json(users);
  };

  findOne = catchErrors(async ({ params }, res) => {
    const { userId } = validateObjectIdParam("userId").parse(params);
    const user = await this.service.findOne(userId);

    return res.status(200).json(user);
  });
}
