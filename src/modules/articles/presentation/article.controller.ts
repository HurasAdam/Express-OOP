/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import catchErrors from "../../../utils/catchErrors";
import { ArticleService } from "../application/article.service";

export class ArticleController {
  private service;
  constructor(articleService: ArticleService) {
    this.service = articleService;
  }

  create = catchErrors(async (req, res) => {});

  find = catchErrors(async (req, res) => {});

  findOne = catchErrors(async (req, res) => {});

  updateOne = catchErrors(async (req, res) => {});

  deleteOne = catchErrors(async (req, res) => {});
}
