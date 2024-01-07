import { FinancialTransaction } from "@prisma/client";
import prisma from "../prisma";

export async function createNewTransaction(
  transactionData: FinancialTransaction
) {
  try {
    await prisma.financialTransaction.create({
      data: {
        ...transactionData,
        categoryId: "72fcbe74-eb3f-4bdb-bb2f-99d09f9d6ff4",
      },
    });
  } catch (err) {
    return console.log("erro", err);
  }
}
