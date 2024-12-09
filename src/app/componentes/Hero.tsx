
import React from "react";
import Image from "next/image"; // Import Image component from Next.js
import images from "@/app/componentes/Image/Product Image.png"

const Hero = () => {
  return (
    <div id="herodiv" className="flex justify-center items-center">
      <div className="w-full max-w-screen-xl h-auto bg-[#F0F2F3] flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-6">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center sm:items-start w-full sm:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-[14px] pt-[50px] sm:pt-[119px] font-normal text-[#272343] text-center sm:text-left">
            WELCOME TO CHAIRY
          </h1>
          <p className="w-full sm:w-[557px] text-[40px] sm:text-[60px] font-bold text-center sm:text-left mb-6">
            Best Furniture Collection for your interior.
          </p>
          <button className="bg-[#029FAE] w-[171px] text-white py-3 px-6 rounded-[8px] flex items-center gap-[20px] hover:bg-[#a6ebf1] mx-auto sm:mx-0">
            <span>Shop Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12h18M15 18l6-6-6-6"
              />
            </svg>
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-[130px] flex justify-center">
          <Image
            src={images}// Path relative to the public folder
            alt="Product Image"
            width={434} // Adjust width as needed
            height={584} // Adjust height as needed
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
