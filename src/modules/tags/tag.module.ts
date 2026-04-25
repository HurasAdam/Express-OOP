/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { TagService } from "./application/tag.service";
import { TagRepository } from "./infrastructure/mongoose/tag.repository";
import TagModel from "./infrastructure/tag.model";
import { TagController } from "./presentation/tag.controller";

export function createTagModule(deps: { articleRepository: any }) {
  const tagRepository = new TagRepository(TagModel);
  const service = new TagService(tagRepository, deps.articleRepository);
  const controller = new TagController(service);
}
