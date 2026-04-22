import mongoose, { Document, Schema, Types } from "mongoose";

export interface TagDocument extends Document {
  name: string;
  createdBy: Types.ObjectId;
}

const tagSchema = {
  name: { type: String, required: true, trim: true, unique: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
};

const schema = new Schema<TagDocument>(tagSchema, {
  timestamps: true,
});

const TagModel = mongoose.model<TagDocument>("Tag", schema);
export default TagModel;
