"use server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
export const fetchSummary = async () => {
  const { userId } = auth();
  if (!userId) {
    return { status: 401, data: { message: "Unauthorized" } };
  }
  const data = await prisma.transaction.groupBy({
    by: ["createdAt"],
    where: {
      userId: userId,
    },
  });
  console.log(data);
  return data;
};
