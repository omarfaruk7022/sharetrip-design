import Image from "next/image";
import arrow from "@/assets/Vector.svg";
import Link from "next/link";
import ellipse from "@/assets/Ellipse.svg";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <div className="h-10 w-full bg-white "></div>
      <div className="px-[92px] flex my-4 gap-5">
        <div className="bg-white w-[248px] h-[623px] rounded-[8px]  "></div>
        <div>
          <div className="flex  gap-2 items-center">
            <p className="text-black text-[13px]">Home</p>
            <span>
              <Image src={arrow} alt="" />
            </span>
            <p className="text-black text-[13px]">Booking History</p>
            <span>
              <Image src={arrow} alt="" />
            </span>
            <p className="text-black text-[13px]">Flight</p>
            <span>
              <Image src={arrow} alt="" />
            </span>
            <Link href="#" className=" text-[13px] text-[#1882FF] ">
              STFL17121182045413
            </Link>
          </div>
          <section className="bg-white w-[840px] h-[590px] rounded-[8px] my-4">
            <div className="p-5 flex items-center justify-between border-b">
              {" "}
              <div className=" flex items-center gap-5">
                <div className=" w-[24px]   h-[24px] bg-[#1882FF] text-[14px] font-semibold rounded-full flex justify-center items-center">
                  <span className=" ">1</span>
                </div>
                <div className="">
                  <p className="text-[#1A2B3D] font-semibold flex items-center gap-1">
                    DAC <IoArrowForwardSharp />
                    JFK
                  </p>

                  <p className="flex items-center gap-2 text-[#5A6573] text-[13px]">
                    {" "}
                    <span className=" ">Round Trip </span>
                    <Image className="" src={ellipse} alt="" />
                    <span>25 Mar - 4 Apr 2023 </span>
                    <Image className="" src={ellipse} alt="" />
                    <span>1 Stop</span>
                  </p>
                </div>
              </div>
              <div className="bg-[#E8F3FF]  rounded-[32px]">
                <span className="text-[#1882FF] text-[12px] px-2">33h 20m</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
