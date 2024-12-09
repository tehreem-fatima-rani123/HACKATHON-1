"use client";
import React, { useState } from "react";
import Image from "next/image";
import pic from "@/app/componentes/Image/Vector.png";
import logo from "@/app/componentes/Image/Logo Icon.png";
import icon from "@/app/componentes/Image/Buy 2.png";
import { FaCheck } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { Button } from "@/components/ui/button"; // Shadcn button component
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

function Navbar() {
  const [cartCount,] = useState(2); // Cart count state

  return (
    <div>
      {/* First section: Free shipping & language dropdown */}
      <div className="w-full bg-[#272343]">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-16 py-[14px]">
          {/* Free shipping message */}
          <div className="opacity-70 text-white text-sm flex gap-3 items-center mb-2 sm:mb-0">
            <span>
              <FaCheck />
            </span>
            Free shipping on all orders over $50
          </div>

          {/* Language and FAQ section */}
          <div className="flex flex-row items-center gap-6 opacity-70 text-white text-sm">
            {/* Language dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  Eng
                  <Image src={pic} alt="angle" width={7} height={4} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* FAQs */}
            <div>Faqs</div>
            {/* Need Help Section */}
            <div className="flex flex-row items-center gap-1">
              <span>
                <CiCircleAlert />
              </span>
              Need Help
            </div>
          </div>
        </div>
      </div>

      {/* Second section: Logo & Cart */}
      <div className="w-full bg-[#F0F2F3]">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-16 py-[20px]">
          {/* Logo */}
          <div className="flex flex-row items-center gap-2 mb-4 sm:mb-0">
            <Image src={logo} alt="logo" width={40} height={40} />
            <div className="text-2xl font-semibold text-[#272343]">Comforty</div>
          </div>
          {/* Cart Section */}
          <div className="relative flex flex-row justify-between items-center px-4 py-[11px] gap-2 bg-white rounded-[0.50rem] shadow-md">
            <Image src={icon} alt="cart icon" className="w-5 h-5" />
            <span className="text-[#272343] font-medium mr-7">Cart</span>
            {cartCount > 0 && (
              <div className="absolute flex items-center justify-center w-[20px] h-[20px] bg-[#007580] rounded-full text-white text-xs font-bold right-[10px] top-[12px]">
                {cartCount}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
