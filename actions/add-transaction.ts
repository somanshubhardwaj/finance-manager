"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
interface AddTransaction {
  amount: number;
  title: string;
  remark: string;
  category: string;
}
export const addTransaction = async ({
  amount,
  title,
  remark,
  category,
}: AddTransaction) => {
  try {
    // Add transaction
    const { userId } = auth();
    if (!userId) {
      return { status: 401, data: { message: "Unauthorized" } };
    }
    const transaction = await prisma.transaction.create({
      data: {
        amount,
        title,
        remark,
        category,
        userId,
      },
    });

    return { status: 200, data: { message: "Transaction added successfully" } };
  } catch (error) {
    console.error(error);
    return { status: 500, data: { message: "Failed to add transaction" } };
  }
};
