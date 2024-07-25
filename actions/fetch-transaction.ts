"use server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
export const fetchTransaction = async () => {
  try {
    const { userId } = auth();
    if (!userId) {
      return { status: 401, data: { message: "Unauthorized" } };
    }
    const transactions = await prisma.transaction.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        id: "desc",
      },
      take: 10,
    });

    return { status: 200, data: transactions };
  } catch (error) {
    console.error(error);
    return { status: 500, data: { message: "Failed to fetch transactions" } };
  }
};
