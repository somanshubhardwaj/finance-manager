import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import React from "react";

const Heading = () => {
  return (
    <div className="flex justify-center items-center  min-h-[90vh]">
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="flex gap-2 flex-col">
          <h1 className="text-5xl font-bold text-center">Finance Manager</h1>
          <p className="text-lg text-center">Manage your finances with ease</p>
        </span>
        <Button size={"sm"}>
          <SignUpButton>
            <span className="font-semibold text-base">Get Started</span>
          </SignUpButton>
        </Button>
      </div>
    </div>
  );
};

export default Heading;
