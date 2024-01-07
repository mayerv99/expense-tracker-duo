import express from "express";

import { createNewUser, validateUser } from "../Controllers/authController";
import { generateToken, validateToken } from "../Middleware/jwt";
import { User } from "@prisma/client";

const router = express.Router();

// Register function
router.post("/register", async (req, res) => {
  const {
    //name
    email,
    password,
  } = req.body;

  // Check if user already exists
  const user = await validateUser(email, password);

  if (user) {
    return res.status(409).json({ message: "Email already in use" });
  }

  const name = "carlos";
  try {
    const userData = { name, email, password };

    const newUser: User = (await createNewUser(userData)) as User;

    const token = generateToken(newUser.id);

    return res.status(201).json({ auth: true, token: token });
  } catch (err) {
    return res.status(500).json({ message: "User not created" });
  }
});

// Login function
router.post("/", async (req, res, next) => {
  const { email, password } = req.body;
  const user = await validateUser(email, password);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { id } = user;

  const token = generateToken(id);

  return res.status(200).json({ auth: true, token: token });
});

export default router;
