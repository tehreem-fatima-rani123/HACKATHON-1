import React from 'react'
import Image from 'next/image'
import icon from "@/app/componentes/Image/Buy 2.png";

const Product = () => {
  return (
    <div id='Prodectpage'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className='font-semibold text-2xl py-4 text-start'>
          All Products
        </div>

        {/* Flex container for horizontal alignment */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12'>
          <div className='h-[377px] w-full'>
            <Image
              className='h-[312px] w-full rounded-[6px]'
              src="/image.png"
              alt='chair'
              height={500}
              width={500}
            />
            <div className='h-[51px] w-full text-[#007580] mt-2'>
              Library Stool Chair <br />
              <div className='flex justify-between items-center'>
                <span className='font-semibold text-black'>$20</span>
                <span className='h-[40px] w-[40px] rounded-[7px] flex items-center justify-center bg-[#007580]'>
                  <Image src="/Buy 3.png" alt="cart icon" className="w-5 h-5" width={100} height={100} />
                </span>
              </div>
            </div>
          </div>

          <div className='h-[377px] w-full'>
            <Image
              className='h-[312px] w-full rounded-[6px]'
              src="/image (1).png"
              alt='chair'
              height={500}
              width={500}
            />
            <div className='h-[51px] w-full mt-2'>
              Library Stool Chair <br />
              <span className='font-semibold text-black'>$20 <span className='text-sm text-gray-400 line-through'>$30</span></span>
              <span className='h-[40px] w-[40px] -mt-10 ml-auto rounded-[7px] flex items-center justify-center bg-[#F0F2F3]'>
                <Image src={icon} alt="cart icon" className="w-5 h-5" />
              </span>
            </div>
          </div>

          <div className='h-[377px] w-full'>
            <Image
              className='h-[312px] w-full rounded-[6px]'
              src="/image 123.jpeg"
              alt='chair'
              height={500}
              width={500}
            />
            <div className='h-[51px] w-full mt-2'>
              Library Stool Chair <br />
              <span className='font-semibold text-black'>$20</span>
              <span className='h-[40px] w-[40px] -mt-10 ml-auto rounded-[7px] flex items-center justify-center bg-[#F0F2F3]'>
                <Image src={icon} alt="cart icon" className="w-5 h-5" />
              </span>
            </div>
          </div>

          <div className='h-[377px] w-full'>
            <Image
              className='h-[312px] w-full rounded-[6px]'
              src="/naina.png"
              alt='chair'
              height={500}
              width={500}
            />
            <div className='h-[51px] w-full mt-2'>
              Library Stool Chair <br />
              <span className='font-semibold text-black'>$20</span>
              <span className='h-[40px] w-[40px] -mt-10 ml-auto rounded-[7px] flex items-center justify-center bg-[#F0F2F3]'>
                <Image src={icon} alt="cart icon" className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-screen-xl mx-auto px-4 mt-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {/* Repeat the structure of products here */}
          <div className='h-[377px] w-full'>
            <Image
              className='h-[312px] w-full rounded-[6px]'
              src="/image.png"
              alt='chair'
              height={500}
              width={500}
            />
            <div className='h-[51px] w-full text-[#007580] mt-2'>
              Library Stool Chair <br />
              <div className='flex justify-between items-center'>
                <span className='font-semibold text-black'>$20</span>
                <span className='h-[40px] w-[40px] rounded-[7px] flex items-center justify-center bg-[#007580]'>
                  <Image src="/Buy 3.png" alt="cart icon" className="w-5 h-5" width={100} height={100} />
                </span>
              </div>
            </div>
          </div>

          <div className='h-[377px] w-full'>
            <Image
              className='h-[312px] w-full rounded-[6px]'
              src="/image (1).png"
              alt='chair'
              height={500}
              width={500}
            />
            <div className='h-[51px] w-full mt-2'>
              Library Stool Chair <br />
              <span className='font-semibold text-black'>$20 <span className='text-sm text-gray-400 line-through'>$30</span></span>
              <span className='h-[40px] w-[40px] -mt-10 ml-auto rounded-[7px] flex items-center justify-center bg-[#F0F2F3]'>
                <Image src={icon} alt="cart icon" className="w-5 h-5" />
              </span>
            </div>
          </div>

          <div className='h-[377px] w-full'>
            <Image
              className='h-[312px] w-full rounded-[6px]'
              src="/image 123.jpeg"
              alt='chair'
              height={500}
              width={500}
            />
            <div className='h-[51px] w-full mt-2'>
              Library Stool Chair <br />
              <span className='font-semibold text-black'>$20</span>
              <span className='h-[40px] w-[40px] -mt-10 ml-auto rounded-[7px] flex items-center justify-center bg-[#F0F2F3]'>
                <Image src={icon} alt="cart icon" className="w-5 h-5" />
              </span>
            </div>
          </div>

          <div className='h-[377px] w-full'>
            <Image
              className='h-[312px] w-full rounded-[6px]'
              src="/naina.png"
              alt='chair'
              height={500}
              width={500}
            />
            <div className='h-[51px] w-full mt-2'>
              Library Stool Chair <br />
              <span className='font-semibold text-black'>$20</span>
              <span className='h-[40px] w-[40px] -mt-10 ml-auto rounded-[7px] flex items-center justify-center bg-[#F0F2F3]'>
                <Image src={icon} alt="cart icon" className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;
