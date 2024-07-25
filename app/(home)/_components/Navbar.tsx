import { ModeToggle } from "@/components/Mode";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex py-4">
        <div className="flex-1">
          <span className="text-lg font-semibold">Finance Manger</span>
        </div>
        <div className="flex gap-2">
          <Button size={"sm"} variant={"ghost"}>
            <SignInButton mode="redirect" />
          </Button>
          <Button size={"sm"}>Sign Up</Button>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
