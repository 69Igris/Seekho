import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const existingUser = await prisma.user.findFirst({ 
      where: { 
        OR: [
          { username: username.toLowerCase() },
          { email: email.toLowerCase() }
        ] 
      } 
    });
    if (existingUser) {
      return res.status(409).json({ message: "Username or email already in use." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username: username.toLowerCase(),
        email: email.toLowerCase(),
        password: hashedPassword,
      },
    });
    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: "7d" });
    res.status(201).json({ token, user: { id: newUser.id, username: newUser.username, email: newUser.email } });

  }catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }

});

router.post("/login", async (req, res) => {

  try {
    const { identifier, password } = req.body;
    if (!identifier || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const user = await prisma.user.findFirst({ 
      where: { 
        OR: [
          { username: identifier.toLowerCase() },
          { email: identifier.toLowerCase() }
        ] 
      } 
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect credentials." });
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "7d" });
    res.json({
      message: "Login successful",
      token,
      user: { id: user.id, username: user.username, email: user.email },
    });
  }catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
export default router;