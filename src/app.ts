import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
})

app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
  res.json({ status: "success", 'message' : "Hello from API 🚀"});
});

export default app;
