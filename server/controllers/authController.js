import User from "../models/userModel.js";
import createError from "http-errors";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
  const { userName, email, password } = req.body;
  console.log(password);
  try {
    const doesExists = await User.findOne({ email: email });
    if (doesExists)
      throw createError.Conflict(
        `A user with this ${email} email already exists!!`
      );
    const token = uuidv4();
    const user = new User({ userName, email, password, token });
    await user.save();
    // sendVerification(user);
    res.status(201).json({
      Message:
        "User registered successfully \n Check your email to verify your account",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw createError.NotFound(
        `User with this ${email} emailId does not exist !!`
      );
    }
    if(!user.isVerified){
      throw createError.Forbidden(`User email is not verified, please verify it first`);
    }
    const isMatch = await user.isValidPassword(password);
    if (!isMatch) throw createError.Unauthorized("Username/password not valid");

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);

    res.json({ message: "Login successful", token: token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
