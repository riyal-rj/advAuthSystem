export const VERIFICATION_EMAIL_TEMPLATE=`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f4f4f7;
      color: #333;
      line-height: 1.8;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(to right, #000, #007bff);
      color: white;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 30px;
    }
    .content p {
      margin: 0 0 15px;
    }
    .code-box {
      text-align: center;
      margin: 30px 0;
    }
    .code-box span {
      display: inline-block;
      font-size: 36px;
      font-weight: bold;
      color: #007bff;
      letter-spacing: 6px;
      padding: 10px 20px;
      background: #000;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .footer {
      background: #f4f4f7;
      padding: 15px;
      text-align: center;
      font-size: 12px;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Email Verification</h1>
    </div>
    <div class="content">
      <p>Hello,</p>
      <p>Thank you for registering {username} ! Please use the verification code below:</p>
      <div class="code-box">
        <span>{verificationCode}</span>
      </div>
      <p>Enter this code on the verification page to complete your registration.</p>
      <p><strong>Note:</strong> This code will expire in 15 minutes for security purposes.</p>
      <p>If you didn’t sign up for an account, please disregard this email.</p>
      <p>Best regards,<br>advAuthSystem - developed by riyalRJ (Ritankar Jana)</p>
    </div>
    <div class="footer">
      <p>This is an automated message. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>


`


export const WELCOME_MAIL_TEMPLATE=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Aboard</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f4f4f7;
      color: #333;
      line-height: 1.8;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(to right, #000, #007bff);
      color: white;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 30px;
    }
    .content p {
      margin: 0 0 15px;
    }
    .welcome-box {
      text-align: center;
      margin: 30px 0;
    }
    .welcome-box span {
      display: inline-block;
      font-size: 28px;
      font-weight: bold;
      color: #007bff;
      padding: 10px 20px;
      background: #000;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .footer {
      background: #f4f4f7;
      padding: 15px;
      text-align: center;
      font-size: 12px;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to advAuthSystem!</h1>
    </div>
    <div class="content">
      <p>Dear {username},</p>
      <p>We are excited to have you on board! Thank you for connecting with us. We are committed to providing you with the best experience possible.</p>
      <div class="welcome-box">
        <span>Let’s Get Started!</span>
      </div>
      <p>Feel free to explore our features and make the most of your experience. If you have any questions, we are here to help!</p>
      <p>Best regards,<br>advAuthSystem Team - developed by riyalRJ (Ritankar Jana)</p>
    </div>
    <div class="footer">
      <p>This is an automated message. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>

`

export const RESET_PASSWORD_TOKEN_TEMPLATE=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Request</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f4f4f7;
      color: #333;
      line-height: 1.8;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(to right, #000, #007bff);
      color: white;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 30px;
    }
    .content p {
      margin: 0 0 15px;
    }
    .reset-box {
      text-align: center;
      margin: 30px 0;
    }
    .reset-box span {
      display: inline-block;
      font-size: 20px;
      font-weight: bold;
      color: #007bff;
      padding: 10px 20px;
      background: #000;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .footer {
      background: #f4f4f7;
      padding: 15px;
      text-align: center;
      font-size: 12px;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Request</h1>
    </div>
    <div class="content">
      <p>Hello {username},</p>
      <p>We received a request to reset your password. Use the reset token below to proceed:</p>
      <div class="reset-box">
        <span>{resetToken}</span>
      </div>
      <p>Enter this token on the password reset page to set a new password. This token will expire in 15 minutes for security purposes.</p>
      <p>If you did not request a password reset, please ignore this email or contact our support team.</p>
      <p>Best regards,<br>advAuthSystem Team - developed by riyalRJ (Ritankar Jana)</p>
    </div>
    <div class="footer">
      <p>This is an automated message. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>

`


export const RESET_PASSWORD_SUCCESSFUL_TEMPLATE=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f4f4f7;
      color: #333;
      line-height: 1.8;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(to right, #000, #007bff);
      color: white;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 30px;
    }
    .content p {
      margin: 0 0 15px;
    }
    .success-box {
      text-align: center;
      margin: 30px 0;
    }
    .success-box span {
      display: inline-block;
      font-size: 20px;
      font-weight: bold;
      color: #007bff;
      padding: 10px 20px;
      background: #000;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .footer {
      background: #f4f4f7;
      padding: 15px;
      text-align: center;
      font-size: 12px;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Successful</h1>
    </div>
    <div class="content">
      <p>Hello {username},</p>
      <p>Your password has been successfully reset. You can now log in with your new password.</p>
      <div class="success-box">
        <span>Success!</span>
      </div>
      <p>If you did not perform this action, please contact our support team immediately.</p>
      <p>Best regards,<br>advAuthSystem Team - developed by riyalRJ (Ritankar Jana)</p>
    </div>
    <div class="footer">
      <p>This is an automated message. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>

`