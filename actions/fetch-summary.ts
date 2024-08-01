"use server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
export const fetchSummary = async () => {
  const { userId } = auth();
  if (!userId) {
    return { status: 401, data: { message: "Unauthorized" } };
  }

  const data = await prisma.transaction.groupBy({
    by: ["category"],
    where: {
      userId: userId,
    },
    _sum: {
      amount: true,
    },
  });
  return {
    income: data.find((d) => d.category === "income")?._sum.amount || 0,
    expense: data.find((d) => d.category === "expense")?._sum.amount || 0,
    investment: data.find((d) => d.category === "investment")?._sum.amount || 0,
  };
};
