"use client";

import { useTheme } from "next-themes";
const page = () => {
  const { theme } = useTheme();
  return (
    <div className="flex  w-full flex-col pt-11">
      <div className="px-4 md:px-8 flex">
        <div className="flex-1 font-bold text-2xl">Categories</div>
      </div>
      <main className="flex flex-1 flex-col md:flex-row flex-wrap  gap-4 p-4 md:gap-8 md:p-8"></main>
    </div>
  );
};

export default page;
