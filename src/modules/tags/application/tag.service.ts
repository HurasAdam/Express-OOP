/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import AppErrorCode from "../../../constants/appErrorCode";
import { CONFLICT, NOT_FOUND } from "../../../constants/http";
import appAssert from "../../../utils/appAssert";
import { ITagRepository } from "../domain/tag.repository.interface";
import { CreateTagDto } from "../dto/create-tag.dto";
import { FindTagsQueryDto } from "../dto/find-tags-query.dto";
import { UpdateTagDto } from "../dto/update-tag.dto";

export class TagService {
  private tagRepository;
  private articleRepository;
  constructor(tagRepository: ITagRepository, articleRepository: unknown) {
    this.tagRepository = tagRepository;
    this.articleRepository = articleRepository;
  }

  async create(userId: string, data: CreateTagDto) {
    const alreadyExist = await this.tagRepository.findByName(data.name);
    appAssert(!alreadyExist, CONFLICT, "Tag with that name already exists");
    return this.tagRepository.create(userId, data);
  }

  find(query: FindTagsQueryDto) {
    return this.tagRepository.find(query);
  }

  findOne(id: string) {
    this.tagRepository.findOne(id);
  }

  updateOne(id: string, data: UpdateTagDto) {
    this.tagRepository.updateOne(id, data);
  }

  async deleteOne(id: string) {
    const tag = await this.tagRepository.deleteOne(id);

    appAssert(tag, NOT_FOUND, "Tag not found", AppErrorCode.NotFound);

    return;
  }
}
