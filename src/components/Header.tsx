import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoReorderTwo } from "react-icons/io5";
import { HiHome } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image"; 

function Header() {
  return (
    <div className="flex items-center border-b-2 p-2 bg-black text-white">
    
      <div className="flex items-center gap-2 sm:flex-1">
        <Image
          src="/image.png" 
          alt="Logo"
          width={60} 
          height={60}
          className="rounded-full" 
        />
        <span className="text-3xl font-semibold">WanderWays</span>
      </div>

     
      <div className="gap-4 sm:flex hidden items-center">
        <Link href="/cart" className="hover:text-gray-600">
          <HiHome size={27} />
        </Link>
        <CgProfile size={27} />
      </div>

  
      <div className="flex sm:hidden ml-auto items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="relative">
            <IoReorderTwo size={27} />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50"
          >
            <DropdownMenuLabel>
              <Link
                href="/cart"
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md"
              >
                <HiHome size={20} />
                <span>home</span>
              </Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md">
                <CgProfile size={20} />
                <span>Profile</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Header;
