"use client";
import Navbar from "./_components/Navbar";
import Heading from "./_components/Heading";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
export default function Home() {
  const { userId, isLoaded } = useAuth();
  const router = useRouter();
  if (userId && isLoaded) {
    router.push("/dashboard");
  }
  return (
    <div className="px-4">
      <Navbar />
      <Heading />
    </div>
  );
}
