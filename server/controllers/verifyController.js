import User from "../models/userModel.js";
import Token from "../models/tokenModel.js";
import createError from "http-errors";

export const verifyEmail = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) throw createError("Invalid Link");

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) {
      throw createError.NotFound("Invalid link");
    }

    await User.updateOne({ _id: user._id, isVerified: true });
    await Token.deleteOne({
      userId: user._id,
      token: req.params.token,
    });

    res.status(200).send({ message: "Email verified successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
