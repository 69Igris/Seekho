import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import router from "./routes/auth.js";

dotenv.config();
const app = express();
const prisma = new PrismaClient();
app.use(cors(
  {
    origin :"*",
    methods : ["GET", "POST", "PUT", "DELETE"],
  }
));
app.use(express.json());


async function connectDB() {
  try {
    await prisma.$connect();
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
}
connectDB();
app.use("/api/auth", router);
app.get("/", (req, res) => {
  res.json({ message: "Seekho Backend Running Successfully" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});