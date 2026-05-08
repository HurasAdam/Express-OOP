/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { IArticleRepository } from "../articles/domain/article.repository.interface";
import { TagService } from "./application/tag.service";
import { TagRepository } from "./infrastructure/mongoose/tag.repository";
import TagModel from "./infrastructure/tag.model";
import { TagController } from "./presentation/tag.controller";

export function createTagModule(deps: {
  articleRepository: IArticleRepository;
}) {
  const repository = new TagRepository(TagModel);
  const service = new TagService(repository, deps.articleRepository);
  const controller = new TagController(service);

  return {
    controller,
    repository,
  };
}
