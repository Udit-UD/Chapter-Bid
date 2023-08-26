import nodemailer from "nodemailer";
import api from 'googleapis';

const google=api.google;

const Oauth2 = google.auth.OAuth2;

// Create SMTP transporter
const createTransporter = async () => {
  const oauth2Client = new Oauth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });


  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken:process.env.ACCESS_TOKEN,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  });
}

// Send email with the given options.
const sendEmail = async (emailOptions) => {
  try {
    const transporter = await createTransporter();
    await transporter.sendMail(emailOptions);
	console.log("Mail sent successfully")
  } catch (err) {
    console.log(err);
  }
}

export default sendEmail;
