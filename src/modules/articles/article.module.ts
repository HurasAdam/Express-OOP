/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { ArticleService } from "./application/article.service";
import ArticleModel from "./infrastructure/article.model";
import { articleRepository } from "./infrastructure/mongoose/article.repository";
import { ArticleController } from "./presentation/article.controller";

export function createArticleModule() {
  const repository = new articleRepository(ArticleModel);
  const articleService = new ArticleService(repository);
  const controller = new ArticleController(articleService);

  return {
    controller,
    repository,
  };
}
