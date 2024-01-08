import express from "express";
import { validateToken } from "../Middleware/jwt";
import { User } from "@prisma/client";

const router = express.Router();

router.get("/me", validateToken, async (request, response) => {
  return response.status(200).json("ok")
})


export default router