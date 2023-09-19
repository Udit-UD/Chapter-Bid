import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

export const BookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max: [100, 'Name can be at most 100 characters long'],
      min: [10, 'Name must be at least 10 characters long'],
    },
    author: {
      type: String,
      required: true,
    },
    availableForAuction:{
      type:Boolean,
      default:true
    },
    tags: [
      {
        type: String,
        default: "New",
        required: false,
      },
    ],
    genre: {
      type: String,
      required: false,
    },
    age: {
      type: String,
      required: false,
    },
    publicationYear: {
      type: Number,
    },
    description: {
      type: String,
    },
    isbn: {
      type: String,
    },
    coverImageUrl: {
      type: String,
    },
    startingBid: {
      type: Number,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Book", BookSchema);
