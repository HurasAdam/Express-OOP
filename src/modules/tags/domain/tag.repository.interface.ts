/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { CreateTagDto } from "../dto/create-tag.dto";
import { UpdateTagDto } from "../dto/update-tag.dto";
import { Tag } from "./tag.entity";

export interface ITagRepository {
  create(data: CreateTagDto): Promise<Tag>;
  find(): Promise<Tag[]>;
  findOne(id: string): Promise<Tag | null>;
  updateOne(id: string, data: UpdateTagDto): Promise<Tag | null>;
  deleteOne(id: string): Promise<Tag | null>;
}
