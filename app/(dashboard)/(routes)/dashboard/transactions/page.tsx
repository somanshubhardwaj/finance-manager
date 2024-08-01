"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddForm from "@/app/(dashboard)/_components/AddForm";
import { fetchTransaction } from "@/actions/fetch-transaction";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
const page = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchTransaction();
      setData(res.data);
    };
    fetch();
  }, []);
  return (
    <div className="flex min-h-screen w-full flex-col ">
      <main className="flex flex-1 flex-col gap-2 p-0 md:gap-8 md:p-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="grid gap-2">
              <CardTitle>Transactions</CardTitle>
              <CardDescription>Recent transactions</CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Sheet>
                <SheetTrigger className="bg-primary px-4 py-1 text-secondary rounded-lg">
                  Add
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Add Transaction</SheetTitle>
                  </SheetHeader>
                  <AddForm />
                </SheetContent>
              </Sheet>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title | Remark</TableHead>
                  <TableHead>Category</TableHead>

                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((transaction: any) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <div className="font-medium">{transaction.title}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {transaction.remark}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span
                        className={cn(
                          "text-sm px-2 py-0.5 rounded-md text-black font-medium capitalize",
                          transaction.category === "income" && "bg-green-300",
                          transaction.category === "expense" && "bg-red-300",
                          transaction.category === "investment" && "bg-blue-300"
                        )}
                      >
                        {transaction.category}
                      </span>
                    </TableCell>

                    <TableCell className="text-right">
                      {transaction.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default page;
