import Navbar from "@/Components/Navbar";
import Image from "next/image";
import arrow from "@/assets/Vector.svg";
import Link from "next/link";

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
            <div className="p-7">
              <div>
                <div className=" w-[24px]   h-[24px] bg-[#1882FF] text-[14px] font-semibold rounded-full ">
                  <span className="flex justify-center ">1</span>
                </div>
              </div>
              <div></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
