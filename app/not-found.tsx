import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen gap-5">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="tracking-widest font-medium">
        Could not find requested resource
      </p>
      <Link href="/">
        {" "}
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
