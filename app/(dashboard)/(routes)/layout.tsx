"use client";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Navbar from "../_components/Navbar";
const layout = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, userId} = useAuth();
  const router = useRouter();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!userId) {
    router.push("/sign-in");
  }

  return (
    <div className="px-8">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
