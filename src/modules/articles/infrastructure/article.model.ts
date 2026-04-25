/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */

import { model, Schema, Types } from "mongoose";

export interface ArticleDocument extends Document {
  title: string;
  employeeDescription: string;

  tags: Types.ObjectId[];

  isImportant: boolean;
  isVisible: boolean;

  lastVerifiedAt: Date | null;

  status: "draft" | "approved" | "rejected" | "pending";

  rejectionReason?: string | null;

  rejectionNote?: {
    text?: string;
    createdBy?: Types.ObjectId;
    createdAt?: Date | null;
    targetUser?: Types.ObjectId;
  };

  createdBy: Types.ObjectId;
  verifiedBy: Types.ObjectId;
  lastUpdatedBy?: Types.ObjectId;

  viewsCounter: number;

  isTrashed: boolean;

  product: Types.ObjectId;
  category: Types.ObjectId;

  followers: Types.ObjectId[];

  createdAt: Date;
  updatedAt: Date;
}

const articleSchema = new Schema<ArticleDocument>(
  {
    title: { type: String, required: true },
    employeeDescription: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag", required: true }],
    isImportant: { type: Boolean, default: false },
    isVisible: { type: Boolean, required: true, default: false },
    lastVerifiedAt: { type: Date, default: null },
    status: {
      type: String,
      enum: ["draft", "approved", "rejected", "pending"],
      required: true,
      default: "draft",
    },
    rejectionReason: { type: String, default: null, required: false },
    rejectionNote: {
      text: { type: String, required: false },
      createdBy: { type: Schema.Types.ObjectId, ref: "User", required: false },
      createdAt: { type: Date, default: null },
      targetUser: { type: Schema.Types.ObjectId, ref: "User", required: false },
    },

    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },

    verifiedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    lastUpdatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    viewsCounter: { type: Number, default: 0 },
    isTrashed: { type: Boolean, default: false },
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  },
);

const ArticleModel = model("Article", articleSchema);
export default ArticleModel;
