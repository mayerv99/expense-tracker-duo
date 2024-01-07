import express from "express";
import { validateToken } from "../Middleware/jwt";
import prisma from "../prisma";
import { createNewTransaction } from "../Controllers/transactionController";
import { FinancialTransaction } from "@prisma/client";

const router = express.Router();

router.get("/", validateToken, async (req, res) => {
  // const {userId} =
  const transactions = await prisma.financialTransaction.findMany();
  console.log(transactions);
  res.status(200).json(transactions);
});

export default router;

interface RequestWithUserId extends Request {
  userId?: string;
}
router.post("/", validateToken, async (req, res) => {
  const { name, type, amount, categoryId, userId }: FinancialTransaction =
    req.body;

  console.log("VAMO CARALHO: ", req.body);

  const transactionData = {
    name,
    type,
    amount,
    categoryId,
    userId,
  } as FinancialTransaction;

  try {
    const newTransaction = await createNewTransaction(transactionData);
    return res.status(201).json(newTransaction);
  } catch (err) {
    return res.status(500).json({ message: "Error" });
  }
});
