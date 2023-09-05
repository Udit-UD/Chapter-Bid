import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;

export const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "Please provide unique Username"],
      unique: false,
    },
    email: {
      type: String,
      required: [true],
      unique: [true, "Email is already registered with another user"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      unique: false,
    },
    number: {
      type: Number,
      required: false,
      unique: false,
      min: [1000000000, "Number must be at least 10 digits"],
      max: [9999999999, "Number must be at most 10 digits"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      required:false
    },
    books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (this.password === "") {
    return "";
  }
  try {
    if (this.isNew) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

export default mongoose.model("User", UserSchema);
