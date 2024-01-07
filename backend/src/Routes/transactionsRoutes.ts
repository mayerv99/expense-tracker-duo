import express from "express";
import { validateToken } from "../Middleware/jwt";
import prisma from "../prisma";
import { createNewTransaction } from "../Controllers/transactionController";
import { FinancialTransaction } from "@prisma/client";

const router = express.Router();

router.get("/", validateToken, async (req, res) => {
  const { userId } = req.body;
  const transactions = await prisma.financialTransaction.findMany({
    where: { userId: userId },
  });
  return res.status(200).json(transactions);
});

router.post("/", validateToken, async (req, res) => {
  const { name, type, amount, categoryId, userId }: FinancialTransaction =
    req.body;

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

export default router;
