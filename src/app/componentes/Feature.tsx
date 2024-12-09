

import Image from 'next/image';
import React from 'react';

export default function FeatureCard() {
  return (
    <div className="flex flex-col md:flex-row md:px-32 lg:px-48 px-6 sm:px-12 md:py-12 space-y-6 md:space-y-0 md:space-x-6 items-center md:items-start">
      {/* Image Section */}
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
        <div className="relative w-full h-64 md:h-96">
          <Image
            className="object-cover object-center rounded-lg transform transition-transform duration-300 hover:scale-105"
            src="/Image (1).png"
            alt="Library Stool Chair"
            layout="fill"
            quality={90}
          />
        </div>
      </div>

      {/* Card Section */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg  text-gray-800 flex flex-col justify-between items-center md:items-start transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-2xl md:text-4xl font-medium md:font-bold mb-4 text-center md:text-left">
          Library Stool <br /> Chair
        </h1>
        <button className="px-4 py-1 bg-cyan-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition duration-300 mb-4">
          200 $ USD
        </button>
        <p className="text-center md:text-left leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
        <button className="px-6 py-2 bg-cyan-500 text-white font-semibold rounded-[10px] hover:bg-cyan-600 transition duration-300">
          ADD To Cart
        </button>
      </div>
    </div>
  );
}