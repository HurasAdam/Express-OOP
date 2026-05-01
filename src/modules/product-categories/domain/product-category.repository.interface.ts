/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

export interface IProductCategoryRepository {
  create(data: any): Promise<any>;
  find(): Promise<any>;
  findOne(id: string): Promise<any>;
  updateOne(id: string, data: any): Promise<any>;
  deleteOne(id: string): any;
}
