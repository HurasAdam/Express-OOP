/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { IArticleRepository } from "../articles/domain/article.repository.interface";
import { IUserRepository } from "../users/domain/user.repository.interface";
import { TagService } from "./application/tag.service";
import { ITagRepository } from "./domain/tag.repository.interface";
import { TagController } from "./presentation/tag.controller";

interface deps {
  tagRepository: ITagRepository;
  articleRepository: IArticleRepository;
  userRepository: IUserRepository;
}

export function createTagModule(deps: deps) {
  const service = new TagService(
    deps.tagRepository,
    deps.articleRepository,
    deps.userRepository,
  );
  const controller = new TagController(service);

  return {
    controller,
  };
}
