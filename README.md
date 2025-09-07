# 🚀 Node API

A RESTful API built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**.
Includes authentication, environment configuration, and a scalable project structure.

---

## 📂 Project Structure

```
.
├── src
│   ├── config        # Database connection, environment setup
│   ├── controllers   # Route controllers
│   ├── routes        # API routes
│   ├── models        # Mongoose models
│   ├── app.ts        # Express app config
│   └── server.ts     # App entry point
├── .env              # Environment variables
├── tsconfig.json     # TypeScript config
├── package.json      # Dependencies & scripts
└── README.md
```

---

## ⚙️ Setup

### 1. Clone the repo

```bash
git clone git@github.com:Shrikant-28/MEAN-Demo.git
cd MEAN-Demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/node-api
JWT_SECRET=your_jwt_secret
```

### 4. Run the app

```bash
# Development (with nodemon + ts-node)
npm run dev

# Build TypeScript → JavaScript
npm run build

# Run production build
npm start
```

---

## 🔑 API Endpoints

### Auth Routes

Base URL: `/api/auth`

| Method | Endpoint    | Description         | Body (JSON)                                    |
| ------ | ----------- | ------------------- | ---------------------------------------------- |
| POST   | `/register` | Register a new user | `{ "username": "test", "password": "123456" }` |
| POST   | `/login`    | Login user          | `{ "username": "test", "password": "123456" }` |

### Health Check

```http
GET /health
```

Response:

```json
{ "status": "ok" }
```

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **TypeScript**
* **MongoDB + Mongoose**
* **JWT Authentication**
* **dotenv** for environment variables
* **bcryptjs** for password hashing

---

## 📜 Scripts

```bash
npm run dev    # Run in development
npm run build  # Compile TypeScript
npm start      # Run production build
```

---

## ✅ To Do

* [ ] Add unit tests (Jest / Supertest)
* [ ] Add Docker support
* [ ] Implement role-based access control
* [ ] Deploy to cloud (Heroku / Render / AWS)

---

## 📄 License

This project is licensed under the **MIT License**.

