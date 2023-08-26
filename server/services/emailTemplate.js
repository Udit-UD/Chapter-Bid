const template = (userName, verificationLink) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
    .message {
      margin-bottom: 20px;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to Chapter Bid!</h1>
    </div>
    <div class="message">
      <p>Dear ${userName},</p>
      <p>Welcome to Chapter Bid, where the world of old and rare books comes alive!</p>
      <p>Get ready to embark on a journey of exploration and bidding, as you immerse yourself in a collection of books that hold stories from the past.</p>
      <p>To complete your registration and start your bidding adventure, please verify your email address by clicking the button below:</p>
      <p><a class="button" href="${verificationLink}">Verify Email</a></p>
    </div>
    <div class="footer">
      <p>If you did not sign up for an account, you can ignore this email.</p>
    </div>
  </div>
</body>
</html>
`;

export default template;
