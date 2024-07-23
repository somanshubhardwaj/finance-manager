"use client";
import { SignInButton, UserButton, UserProfile } from "@clerk/nextjs";
import Image from "next/image";
import { useTheme } from "next-themes";
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {/* <SignInButton />
      <UserButton />
      <UserProfile /> */}

      <div className="text-muted-foreground bg-background">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        exercitationem sequi facilis iste consequatur, accusantium dolores quo
        neque corporis, dolorem officiis voluptate ipsa, nemo debitis. Harum
        aliquam inventore minima nisi quod non, laudantium unde aspernatur
        eveniet veritatis iure sint! Facilis.
        <button onClick={() => setTheme("dark")}>dark</button>
        <button onClick={() => setTheme("light")}>light</button>
      </div>
    </>
  );
}
