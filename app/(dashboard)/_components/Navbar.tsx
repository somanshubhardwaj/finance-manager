import { ModeToggle } from "@/components/Mode";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="py-4 flex gap-11 justify-between">
        <span className="font-medium">Finance manager</span>
        <div className="flex-1 text-muted-foreground hidden md:flex">
          <ul className="flex  space-x-4">
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/dashboard/transactions">Transactions</a>
            </li>
            <li>
              <a href="/dashboard/categories">Categories</a>
            </li>
            <li>
              <a href="/dashboard/accounts">Accounts</a>
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
