/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { ArticleService } from "./application/article.service";
import { IArticleRepository } from "./domain/article.repository.interface";
import { ArticleController } from "./presentation/article.controller";

interface deps {
  articleRepository: IArticleRepository;
}

export function createArticleModule(deps: deps) {
  const articleService = new ArticleService(deps.articleRepository);
  const controller = new ArticleController(articleService);

  return {
    controller,
  };
}
