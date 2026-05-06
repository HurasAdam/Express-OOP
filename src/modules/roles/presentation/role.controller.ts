import catchErrors from "../../../utils/catchErrors";
import { RoleService } from "../application/role.service";
import { createRoleDto } from "../dto/create-role.dto";

export class RoleController {
  private service;
  constructor(roleService: RoleService) {
    this.service = roleService;
  }

  create = catchErrors(async ({ body }, res) => {
    const payload = createRoleDto.parse(body);
    await this.service.create(payload);
    return res.sendStatus(201);
  });

  find = catchErrors(async (req, res) => {
    const query = req.query;
    const roles = await this.service.find(query);
    return res.status(200).json(roles);
  });

  //   findOne = catchErrors(async ({ params }, res) => {
  //     const { userId } = validateObjectIdParam("userId").parse(params);
  //     const user = await this.service.findOne(userId);

  //     return res.status(200).json(user);
  //   });

  getPermissions = catchErrors(async (_, res) => {
    const permissions = this.service.getPermissions();
    return res.status(200).json(permissions);
  });
}
