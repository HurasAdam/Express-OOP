/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { IArticleRepository } from "../domain/article.repository.interface";

export class ArticleService {
  private articleRepository: IArticleRepository;
  constructor(articleRepository: IArticleRepository) {
    this.articleRepository = articleRepository;
  }

  create() {}

  find() {}

  findOne() {}

  updateOne() {}

  deleteOne() {}
}
