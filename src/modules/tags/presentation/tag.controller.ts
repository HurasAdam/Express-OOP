/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { CREATED, NO_CONTENT } from "../../../constants/http";
import catchErrors from "../../../utils/catchErrors";
import { TagService } from "../application/tag.service";
import { createTagDto } from "../dto/create-tag.dto";
import { findTagsQueryDto } from "../dto/find-tags-query.dto";

export class TagController {
  private service;

  constructor(tagService: TagService) {
    this.service = tagService;
  }

  create = catchErrors(async ({ body, userId }, res) => {
    const payload = createTagDto.parse(body);

    await this.service.create(userId, payload);
    return res.sendStatus(CREATED);
  });

  find = catchErrors(async (req, res) => {
    const query = findTagsQueryDto.parse(req.query);

    const serviceResponse = await this.service.find(query);

    return res.status(200).json(serviceResponse);
  });

  findOne = catchErrors(async (req, res) => {});

  updateOne = catchErrors(async (req, res) => {});

  deleteOne = catchErrors(async ({ params }, res) => {
    const { id } = params;

    await this.service.deleteOne(id);
    return res.sendStatus(NO_CONTENT);
  });
}
