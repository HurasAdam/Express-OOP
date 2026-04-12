import catchErrors from "../../utils/catchErrors";

export class SessionController {
  private service;
  constructor(service: any) {
    this.service = service;
  }

  find = catchErrors(async (req, res) => {});

  deleteOne = catchErrors(async (req, res) => {});
}
