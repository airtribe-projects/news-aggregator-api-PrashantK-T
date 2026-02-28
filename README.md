

A RESTful API built with Node.js, Express, and MongoDB that allows users to:

Register and login using JWT authentication

Manage personal content preferences

Fetch personalized news based on preferences

🚀 Features

User Registration & Login

JWT Authentication & Authorization

Preference Management

Personalized News Fetching

Secure API with Helmet & CORS

MongoDB with Mongoose

🛠 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JSON Web Token (JWT)

bcryptjs

Axios

Helmet

Morgan

CORS

📂 Project Structure
project/
│
├── controllers/
│   ├── auth.controller.js
│   ├── preferences.controller.js
│   └── news.controller.js
│
├── middlewares/
│   ├── auth.middleware.js
│   └── error.middleware.js
│
├── models/
│   └── user.model.js
│
├── routes/
│   └── auth.routes.js
│
├── app.js
└── .env
⚙️ Installation & Setup
1. Clone the repository
cd your-repo
2. Install dependencies
npm install
3. Create a .env file in the root directory
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d

NEWS_BASE_URL=https://newsapi.org/v2/everything
NEWS_API_KEY=your_news_api_key
4. Run the server
npm run dev

or

npm start

Server runs at:

http://localhost:5000
🔐 Authentication

All protected routes require a Bearer token in headers:

Authorization: Bearer <your_token>
📌 API Endpoints

Base URL:

/users
📝 Register

POST /users/register

Request Body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
🔑 Login

POST /users/login

Request Body:

{
  "email": "john@example.com",
  "password": "123456"
}
⚙️ Get Preferences (Protected)

GET /users/preferences

🔄 Update Preferences (Protected)

PUT /users/preferences

Request Body:

{
  "preferences": ["movies", "games"]
}

Allowed values:

movies

comics

games

📰 Get Personalized News (Protected)

GET /users/news

Fetches news based on user preferences

Preferences are converted into a query string

Uses external News API service

🧠 How It Works

User registers and password is hashed.

User logs in and receives a JWT token.

Protected routes verify the token.

Preferences are used to build a search query.

Axios fetches news from external API.

API returns personalized articles.

🛡 Security Features

Password hashing with bcrypt

JWT authentication

Protected routes

Helmet security headers

Environment variable configuration