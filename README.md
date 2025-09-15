# Email OTP Authentication (MVC)

A Node.js + Express.js + MongoDB project implementing **Email Authentication** with **Signup, OTP Verification, Login, Resend OTP**, and **JWT-based authentication**, following the **MVC architecture**.


## 🚀 Features

* **Signup** (user registration with email & password)
* **OTP Email Verification** (via Nodemailer)
* **Login** (only after email verification)
* **Resend OTP** functionality
* **Password Hashing** using bcrypt
* **JWT Authentication** (secure API access)
* **Protected Routes** (using middleware)
* **Environment variables** support


## 📂 Project Structure

project-root/
├─ package.json
├─ server.js
├─ .env.example
├─ config/
│  └─ db.js
├─ controllers/
│  └─ authController.js
├─ models/
│  └─ User.js
├─ routes/
│  └─ authRoutes.js
├─ middlewares/
│  └─ authMiddleware.js
├─ utils/
│  ├─ email.js
│  └─ generateOtp.js
└─ README.md


## ⚙️ Installation

# Clone the repository
git clone https://github.com/your-username/email-otp-auth-mvc.git
cd email-otp-auth-mvc

# Install dependencies
npm install

# Setup environment variables
 .env.example .env

Update the `.env` file with your values (MongoDB URI, SMTP credentials, JWT secret, etc.).


## ▶️ Running the App

### Development

npm run dev

### Production

npm start

Server will run at: **[http://localhost:5000](http://localhost:5000)**


## 🔑 API Endpoints

### **Auth Routes**

| Method | Endpoint               | Description                    |
| ------ | ---------------------- | ------------------------------ |
| POST   | `/api/auth/signup`     | Register new user & send OTP   |
| POST   | `/api/auth/verify-otp` | Verify OTP & activate account  |
| POST   | `/api/auth/resend-otp` | Resend new OTP                 |
| POST   | `/api/auth/login`      | Login with email & password    |
| GET    | `/api/auth/me`         | Get logged-in user (protected) |


## 🔒 Environment Variables

Create a `.env` file with the following:

PORT=5000
MONGO_URI=mongodb://localhost:27017/emailAuthDB
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
OTP_EXPIRES_MIN=10


## 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB (Mongoose)**
* **JWT**
* **Nodemailer**
* **bcrypt**


## 🚧 Future Improvements

* Add rate limiting on OTP endpoints
* Hash OTPs before storing (extra security)
* Add password reset functionality
* Add frontend (React / Angular / Vue)


## 📜 License

This project is licensed under the MIT License.


💡 **Contributions are welcome!** Fork the repo, make changes, and submit a PR 🙌
