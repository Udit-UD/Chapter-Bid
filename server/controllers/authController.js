import model from "../models/index.js";
import createError from "http-errors";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import sendEmail from "../services/sendEmail.js";
import template from "../services/emailTemplate.js";

const User = model.User;
const Token = model.Token;

export const register = async (req, res) => {
  const { userName, email, password } = req.body;
  console.log(password);
  try {
    const doesExists = await User.findOne({ email: email });
    if (doesExists)
      throw createError.Conflict(
        `A user with this ${email} email already exists!!`
      );
    let user = new User({ userName, email, password });
    user = await user.save();
    const token = new Token({
      userId: user._id,
      token: uuidv4(),
    });

    await token.save();
    await mailSend(user._id, user.userName, email, token.token);

    res.status(201).json({
      Message:
        "User registered successfully \n Check your email to verify your account",
    });
  } catch (error) {
    console.log(error.message);
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
    if (!user.isVerified) {
      const t = await Token.findOne({ userId: user._id });
      await mailSend(user._id, user.userName, email, t);
      throw createError.Forbidden(
        `User email is not verified, \n A verification link has been sent to your registered email. `
      );
    }
    const isMatch = await user.isValidPassword(password);
    if (!isMatch) throw createError.Unauthorized("Username/password not valid");

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);

    res.json({ message: "Login successful", token: token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

async function mailSend(userId, userName, email, token) {
  console.log(token);
  const url = `${process.env.BASE_URL}api/users/${userId}/verify/${token}`;
  const message = template(userName, url);
  const options = {
    from: process.env.EMAIL,
    to: email,
    subject: "Welcome to Chapter Bid - Verify Your Email",
    html: message,
  };
  await sendEmail(options);
}
