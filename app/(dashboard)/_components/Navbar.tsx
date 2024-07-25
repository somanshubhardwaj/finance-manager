import { ModeToggle } from "@/components/Mode";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <header className="py-4 flex gap-11 justify-between">
        <span className="font-medium">Finance manager</span>
        <div className="flex-1 text-muted-foreground hidden md:flex">
          <ul className="flex  space-x-4">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/transactions">Transactions</Link>
            </li>
            <li>
              <Link href="/dashboard/categories">Categories</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2">
          <ModeToggle />
          <UserButton />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
