import React from "react";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { WiRain } from "react-icons/wi";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const BannerFilter = () => {
  return (
    <>
      <div className="pl-4 md:pl-48 pt-24 md:pt-32 pb-12">
        <div className="text-[32px] md:text-[36px] font-bold">
          <div> Exploring the world</div>
          <div className="mt-[-8px]"> In Comfort. Enjoy Your Life</div>
        </div>
        <div >
          <div className="relative">
            <div className="flex w-[96%] md:w-[480px] mt-8">
              <div className="w-1/2 bg-blue-100 p-2 rounded mr-5">
                <div className="flex justify-between text-[12px] font-medium">
                  <div>From</div>
                  <MdFlightTakeoff className="text-[16px] mt-[-2px]" />
                </div>
                <div className="text-[20px] font-bold text-blue-900">
                  Belorukikha
                </div>
                <div className="text-[14px] font-medium mt-[-4px]">
                  IKH - Russia
                </div>
              </div>
              <div className="w-1/2 bg-blue-100 p-2 pl-6 rounded">
                <div className="flex justify-between text-[12px] font-medium">
                  <div>To</div>
                  <MdFlightLand className="text-[16px] mt-[-2px]" />
                </div>
                <div className="text-[20px] font-bold text-blue-900">
                  K.Khlong
                </div>
                <div className="text-[14px] font-medium mt-[-4px]">
                  75F - Thailand
                </div>
              </div>
            </div>
            <div className="bg-emerald-400 h-10 w-10 rounded-full flex absolute bottom-[20px] left-[43%] md:left-[220px]">
              <TbArrowsRightLeft className="text-white mx-auto self-center" />
            </div>
          </div>
          <div className="flex mt-2 w-[96%] md:w-[480px]">
            <div className="bg-blue-100 p-2 rounded mr-2 w-4/12">
              <div className="text-[12px] font-medium">Depart On</div>
              <div className="text-[28px] font-bold text-blue-900">05</div>
              <div className="text-[13px] font-medium mt-[-8px]">
                Thu, Oct, 2023
              </div>
              <div className="flex">
                <WiRain className="text-[42px] mt-[-2px] text-blue-800" />
                <div>
                  <p className="font-bold">29.6 C</p>
                  <p className="text-[10px] font-medium">Moderate Rain</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 p-2 rounded mr-2 w-4/12">
              <div className="text-[12px] font-medium">Return On</div>
              <div className="text-[28px] font-bold text-blue-900">25</div>
              <div className="text-[13px] font-medium mt-[-8px]">
                Wed, Oct, 2023
              </div>
              <div className="text-[10px] text-center border border-black rounded py-1 text-gray-600">
                Temperature Date Not Available
              </div>
            </div>
            <div className="bg-blue-100 p-2 rounded w-6/12">
              <div className="text-[12px] font-medium">Travelers & Class</div>
              <div className="text-[18px] font-bold text-blue-900">
                7 Travelers, 1 Room
              </div>
              <div className="text-[24px] font-bold text-blue-900 mt-[-4px]">
                Economy
              </div>
              <div className="text-[13px] font-medium mt-[14px]">
                3 Adults, 4 Childs
              </div>
            </div>
          </div>
          <div className="w-[96%] md:w-[480px] flex mt-2">
            <div className="flex">
              <div className="flex w-[141px]">
                <div className="flex border-r-2	border-black pr-1 mr-1 self-center">
                  <p className="text-[12px] font-bold">Return</p>{" "}
                  <IoIosArrowDown className="mt-[2px]" />
                </div>
                <div className="flex self-center">
                  <input type="radio" id="" name="" value="direct" />
                  <label
                    htmlFor="direct"
                    className="text-[12px] font-bold ml-1"
                  >
                    Direct
                  </label>
                </div>
              </div>
            </div>
            <button className="bg-blue-900 text-white p-2 rounded w-full flex justify-center">
              <CiSearch className="mr-1 text-[24px]" />
              <p className="text-[12px] self-center"> <button class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
                     SEARCH
              </button></p>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src="/tourist1.webp"
          alt="tourist1"
          className="absolute right-36 w-60 h-[428px] top-[40vh] border-4 border-white transform skew-x-[-10deg] object-cover"
          width={220}
          height={420}
          unoptimized
        />
        <Image
          src="/flight.jpg"
          alt="flight"
          className="absolute right-[-48px] w-60 h-[540px] top-[10vh] transform skew-x-[-10deg] object-cover"
          width={220}
          height={420}
          unoptimized
        />
      </div>
      <div className="w-full h-16 my-gradiant-bg"></div>
    </>
  );
};

export default BannerFilter;
