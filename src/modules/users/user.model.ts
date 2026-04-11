import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
export interface UserDocument extends mongoose.Document {
  _id: ObjectId;
  name: string;
  surname: string;
  email: string;
  isActive: boolean;
  profilePicture?: string | null;
  password: string;
  mustChangePassword: boolean;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date | null;
  favourites: mongoose.Types.ObjectId[];
  role: string;
}

const userSchema = {
  name: { type: String, required: true, trim: true },
  surname: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  mustChangePassword: { type: Boolean, default: true },
  profilePicture: { type: String, default: null },
  role: { type: String, default: "ADMIN" },
  lastLogin: { type: Date, default: null },
  isActive: { type: Boolean, default: true },
};
const schema = new Schema<UserDocument>(userSchema);

const UserModel = mongoose.model<UserDocument>("User", schema);
export default UserModel;
