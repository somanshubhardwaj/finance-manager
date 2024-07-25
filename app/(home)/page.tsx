"use client";
import { SignInButton, UserButton, UserProfile } from "@clerk/nextjs";
import Image from "next/image";
import { useTheme } from "next-themes";
import Navbar from "./_components/Navbar";
import Heading from "./_components/Heading";
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="px-4">
      {/* <SignInButton />
      <UserButton />
      <UserProfile /> */}
      <Navbar />
      <Heading />
    </div>
  );
}
