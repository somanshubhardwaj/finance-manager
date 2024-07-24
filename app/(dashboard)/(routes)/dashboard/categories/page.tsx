"use client";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = () => {
  return (
    <div className="flex  w-full flex-col pt-11">
      <div className="px-4 md:px-8 flex">
        <div className="flex-1 font-bold text-2xl">Categories</div>
      </div>
      <main className="flex flex-1 flex-col md:flex-row flex-wrap  gap-4 p-4 md:gap-8 md:p-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis modi
        harum ea, vel provident obcaecati voluptatibus ipsum tempore. Deserunt
        sequi illum asperiores sint quibusdam dolore expedita enim recusandae,
        reprehenderit a! Temporibus mollitia fuga magnam debitis omnis impedit
        delectus iusto tempore necessitatibus quis reprehenderit sequi
        voluptatum ipsum ullam minus maiores laborum ea corporis facilis,
        ducimus cum magni, quibusdam perspiciatis nemo! Temporibus at deleniti
        corrupti beatae voluptatibus labore voluptatem totam, suscipit
        necessitatibus nostrum pariatur dolores facilis accusantium doloribus
        rem veniam. Architecto, id cupiditate vero est voluptate reiciendis
        delectus sapiente? Quasi, dicta deleniti.
      </main>
    </div>
  );
};

export default page;
