import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-full w-full m-auto">
      <SignIn />
    </div>
  );
}
