import http from "http";
import app from './app.js';
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

// Create HTTP server from Express app
const server = http.createServer(app);
// Set request timeout (e.g., 30 seconds)
server.setTimeout(30 * 1000, (socket) => {
  console.log("⏳ Request timed out");
  socket.destroy();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
