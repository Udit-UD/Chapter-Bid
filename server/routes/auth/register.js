import User from "../models/user.model.js";
import createError from "http-errors";

export const register = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const doesExists = await User.findOne({ email: email });
    if (doesExists)
      throw createError.Conflict(
        `A user with this ${email} email already exists!!`
      );

    const user = new User({ userName, email, password });
    await user.save();
    sendVerification(user);
    res.status(201).json({ Message: "User registered successfully \n Check your email to verify your account" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

function sendVerification(user) {
    //Need to implement nodemailer 
}
