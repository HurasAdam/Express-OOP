/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { CREATED, NO_CONTENT } from "../../../constants/http";
import catchErrors from "../../../utils/catchErrors";
import { TagService } from "../application/tag.service";

export class TagController {
  private service;

  constructor(tagService: TagService) {
    this.service = tagService;
  }

  create = catchErrors(async ({ body }, res) => {
    const payload = body;

    await this.service.create(payload);
    return res.sendStatus(CREATED);
  });

  find = catchErrors(async (req, res) => {});

  findOne = catchErrors(async (req, res) => {});

  updateOne = catchErrors(async (req, res) => {});

  deleteOne = catchErrors(async ({ params }, res) => {
    const { id } = params;

    await this.service.deleteOne(id);
    return res.sendStatus(NO_CONTENT);
  });
}
