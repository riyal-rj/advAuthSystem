# Advanced Authentication System

This repository contains the backend for an advanced authentication system built using Node.js, Express, and MongoDB. The system supports features like user signup, login, email verification, password reset, and logout. It also includes utilities for token generation and email notifications using Nodemailer.

## Features

- **User Signup**
  - Validates credentials (email, username, and password).
  - Ensures strong password requirements.
  - Sends a verification token via email.

- **Email Verification**
  - Confirms user accounts by verifying the token sent to their email.
  - Tokens expire after 24 hours.

- **Login**
  - Authenticates users with email and password.
  - Sets an authentication token in cookies.

- **Logout**
  - Clears the authentication token from cookies.

- **Password Reset**
  - Sends a password reset token via email.
  - Tokens are valid for 1 hour.
  - Updates the user password upon successful reset.

## Use Case

This authentication system is designed to be a modular component for larger applications requiring robust user authentication and account management. It can be seamlessly integrated into platforms like e-commerce websites, social media platforms, or enterprise applications to enhance security and user experience.

## Project Outlook

Below is a visual representation of the project:

![Project Outlook](./advAuthSystemOutlook.png)

## File Structure

```plaintext
backend/
├── config/
│   ├── ( MongoDB connection setup and Environment variable configuration)
├── controllers/
│   └── (Controllers for handling authentication logic)
├── models/
│   └── (Mongoose schemas for database models)
├── nodemailer/
│   └── (Emails, email templates and nodemailer configuration for sending notifications)
├── routes/
│   └── (API routes)
├── utils/
│   └── (Token generation and cookie handling for email verification)
├── index.js             #Main application and server logic 
├── .env                 # Environment variables (not included in version control)
├── .gitignore           # Files and directories ignored by Git
├── LICENSE              # Project license
├── package.json         # Node.js dependencies and scripts
├── package-lock.json    # Dependency lockfile
├── README.md            # Project documentation
```

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/riyal-rj/advAuthSystem.git
   cd advAuthSystem
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   PORT=use_any_port_no
   JWT_SECRET=your_jwt_secret_key
   EMAIL_SERVICE=your_email_service
   EMAIL_USER=your_email_address
   EMAIL_PASSWORD=your_email_password
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=port_no_of_the_server
   SMTP_MAIL=email_id_for_smtp_support
   SMTP_PASSWORD=smtp_password_of_your_app
   SMTP_SERVICE=smtp_service
   ```

4. Start the server:
   ```bash
   npm start or npm run dev (based on your scripts in package.json)
   ```

## API Endpoints

### User Routes

- **POST /signup**
  - Registers a new user.

- **POST /verify-email**
  - Verifies the user's email using the provided token.

- **POST /login**
  - Logs in the user and sets the authentication cookie.

- **POST /logout**
  - Logs out the user by clearing the authentication cookie.

- **POST /forgot-password**
  - Sends a password reset token to the user's email.

- **POST /reset-password/:token**
  - Resets the user's password using the provided token.

## License

This project is licensed under the [MIT License](./LICENSE).



# .
 An advanced Authentication shystem Developed that suppers email verification and all  other required steps. It can  be  reused in any bigger applications
