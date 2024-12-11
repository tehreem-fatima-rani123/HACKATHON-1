import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  return (
    <div className=" Singlepage container mx-auto px-4 py-8" id="Singlepage">
      {/* Main Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src="/Image (1).png" // Use your image path
            alt="Library Stool Chair"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-9">Library Stool <br /> Chair</h2>
          <button className="bg-[#029FAE] text-white py-2 rounded-full mb-16 hover:bg-teal-600 h-[44px] w-[144px]">
            $20.00 USD
          </button>
          <hr className="w-[400px] h-[1px] mb-10 -mt-9" />
          <p className="text-lg text-gray-600 mb-4 -mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit. Nullam tincidunt erat enim. Lorem ipsum dolor <br /> sit amet, consectetur adipiscing
          </p>
          <div className="flex items-center mb-4">
            <button className="ml-4 bg-[#029FAE] text-white py-2 px-6 mt-3 rounded-[8px] hover:bg-teal-600">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
