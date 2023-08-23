import User from "../models/user.model.js";
import createError from "http-errors";

export const verifyEmail = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw createError.NotAcceptable(`Sorry your account does not exists!!`);
    }
    user.isVerified = true;
    user.save;
    res
      .status(200)
      .json({ message: "Your account is verified now. You can login" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
