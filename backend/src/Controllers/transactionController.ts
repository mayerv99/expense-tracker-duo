import { FinancialTransaction } from "@prisma/client";
import prisma from "../prisma";

export async function createNewTransaction(
  transactionData: FinancialTransaction
) {
  await prisma.financialTransaction.create({
    data: transactionData,
  });
}
