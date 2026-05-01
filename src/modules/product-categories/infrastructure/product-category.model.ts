/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { Document, model, Schema, Types } from "mongoose";

export interface ProductCategoryDocument extends Document {
  name: string;
  createdBy: Types.ObjectId;
  updatedBy: Types.ObjectId;
  productId: Types.ObjectId;
}

const productCategorySchema = {
  name: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  updatedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
};

const schema = new Schema<ProductCategoryDocument>(productCategorySchema, {
  timestamps: true,
});

const ProductCategoryModel = model<ProductCategoryDocument>(
  "ProductCategory",
  schema,
);
export default ProductCategoryModel;
