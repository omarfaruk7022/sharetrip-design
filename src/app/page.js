import Image from "next/image";
import arrow from "@/assets/Vector.svg";
import Link from "next/link";
import ellipse from "@/assets/Ellipse.svg";
import { IoArrowForwardSharp } from "react-icons/io5";
import location from "@/assets/subtract.svg";
import airline from "@/assets/Vector.png";
import airplane from "@/assets/airplane.svg";
import ellipse6 from "@/assets/ellipse6.svg";
import subtractBlue from "@/assets/subtract-blue.svg";
import warning from "@/assets/icon.svg";

export default function Home() {
  return (
    <div>
      <div className="h-[68px] w-full bg-white "></div>
      <div className="px-[92px] flex my-4 gap-5  justify-center">
        <div className="bg-white w-[248px] h-[623px] rounded-[8px]  "></div>
        <div className="">
          <div className="flex  gap-2 items-center">
            <p className=" text-[13px] text-[#5A6573]">Home</p>
            <span>
              <Image src={arrow} alt="" />
            </span>
            <p className="text-[#5A6573] text-[13px]">Booking History</p>
            <span>
              <Image src={arrow} alt="" />
            </span>
            <p className="text-[#5A6573] text-[13px]">Flight</p>
            <span>
              <Image src={arrow} alt="" />
            </span>
            <Link href="#" className=" text-[13px] text-[#1882FF] ">
              STFL17121182045413
            </Link>
          </div>
          <section className="bg-white w-[840px] h-[587px] rounded-[8px] my-4">
            <div className="px-5 h-[70px] flex items-center justify-between border-b border-gray-100">
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
                <span className="text-[#1882FF] text-[12px] px-2 font-medium">
                  33h 20m
                </span>
              </div>
            </div>
            <div className="px-5 pt-5 flex items-center gap-6">
              <div className="flex flex-col items-center">
                {" "}
                <Image className="ms-1" src={location} />
                <div className="-mt-0.5">
                  <Image className="ms-1" src={ellipse6} />
                </div>
              </div>

              <div className="bg-[#F5F7FA] h-[40px] px-[16px]  flex items-center justify-between w-full rounded-[6px]">
                <p className="text-[13px] text-[#1A2B3D] font-medium">
                  Departure from Dhaka
                </p>
                <p className="text-[#5A6573] text-[13px]">
                  <span className="font-semibold">Terminal 1: </span>
                  Hazrat Shahjalal International Airport
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="px-5 pt-6 pb-1">
                <div className="px-0.5">
                  <Image alt="" src={airline} className="py-2" />
                  <div className=" border-s w-[2px] h-[53px] ms-1.5 "></div>
                  <Image alt="" src={airplane} className="py-3" />
                  <div className=" border-s w-[2px] h-[53px] ms-1.5 "></div>
                </div>
              </div>

              <div className="w-full">
                {" "}
                <div className=" grid grid-cols-3 w-full text-black pt-5">
                  <div className=" ">
                    <div>
                      {" "}
                      <h2 className="text-[16px] font-bold">DAC - DXB</h2>
                      <span className="text-[14px]">12 hr 20 min</span>
                    </div>
                    <div className="pt-3">
                      {" "}
                      <p className="text-[14px] font-semibold text-[#3E4957]">
                        Turkish Airlines
                      </p>
                      <span className="text-[14px] text-[#5A6573]">
                        Flight no : TUR467n
                      </span>
                    </div>
                  </div>
                  <div className=" ">
                    <div>
                      {" "}
                      <h2 className="text-[16px] font-bold">07:30 PM</h2>
                      <span className="text-[14px]">28 Mar, Friday</span>
                    </div>
                    <div className="pt-3">
                      {" "}
                      <p className="text-[14px]  text-[#5A6573]">
                        Airbus Industrie 737-800-738
                      </p>
                      <span className="text-[14px] text-[#5A6573]">
                        Class : <span> ECONOMY-Y (O)</span>
                      </span>
                    </div>
                  </div>
                  <div className=" ">
                    <div>
                      {" "}
                      <h2 className="text-[16px] font-bold">08:50 AM</h2>
                      <span className="text-[14px]">29 Mar, Saturday</span>
                    </div>
                  </div>
                </div>
                <div className=" flex items-center py-2 px-3 bg-[#FFEEDB]  gap-3 border border-[#FFE1C2] me-5 rounded-[6px] my-[18px]">
                  <Image className="" src={warning} alt="" />
                  <span className="text-[11.5px] text-[#3E4957] space-y-[16px]">
                    Technical stoppage at Malpensa International Airport
                    (Milano). Before booking this flight please check your visa
                    requirements as per your nationality
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5 flex items-center gap-6">
              <div className="flex flex-col items-center">
                {" "}
                <Image className="ms-1" src={location} />
                <div className="-mt-0.5">
                  <Image className="ms-1" src={ellipse6} />
                </div>
              </div>
              <div className="bg-[#E8F3FF] h-[40px] px-[16px] flex items-center justify-between w-full rounded-[6px]">
                <p className="text-[13px] text-[#1A2B3D] font-medium">
                  Layover at Dubai: 12 hr 20 min
                </p>
                <p className="text-[#5A6573] text-[13px]">
                  Dubai International Airport
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="px-5 pt-6 pb-1">
                <div className="px-0.5">
                  <Image alt="" src={airline} className="py-2" />
                  <div className=" border-s w-[2px] h-[19px] ms-1.5 "></div>
                  <Image alt="" src={airplane} className="py-3" />
                  <div className=" border-s w-[2px] h-[19px] ms-1.5 "></div>
                </div>
              </div>
              <div className=" grid grid-cols-3 w-full text-black pt-5">
                <div className=" ">
                  <div>
                    {" "}
                    <h2 className="text-[16px] font-bold">DAC - DXB</h2>
                    <span className="text-[14px]">12 hr 20 min</span>
                  </div>
                  <div className="pt-3">
                    {" "}
                    <p className="text-[14px] font-semibold text-[#3E4957]">
                      Turkish Airlines
                    </p>
                    <span className="text-[14px] text-[#5A6573]">
                      Flight no : TUR467n
                    </span>
                  </div>
                </div>
                <div className=" ">
                  <div>
                    {" "}
                    <h2 className="text-[16px] font-bold">07:30 PM</h2>
                    <span className="text-[14px]">28 Mar, Friday</span>
                  </div>
                  <div className="pt-3">
                    {" "}
                    <p className="text-[14px]  text-[#5A6573]">
                      Airbus Industrie 737-800-738
                    </p>
                    <span className="text-[14px] text-[#5A6573]">
                      Class : <span> ECONOMY-Y (O)</span>
                    </span>
                  </div>
                </div>
                <div className=" ">
                  <div>
                    {" "}
                    <h2 className="text-[16px] font-bold">08:50 AM</h2>
                    <span className="text-[14px]">29 Mar, Saturday</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 flex items-center gap-6 ">
              <div className="flex flex-col items-center">
                {" "}
                <Image className="ms-1 text-[#1882FF]" src={subtractBlue} />
                <div className="-mt-0.5">
                  <Image className="ms-1" src={ellipse6} />
                </div>
              </div>
              <div className="bg-[#E8F3FF] h-[40px] px-[16px] flex items-center justify-between w-full rounded-[6px]">
                <p className="text-[13px] text-[#1A2B3D] font-medium">
                  Destination at New York
                </p>
                <p className="text-[#5A6573] text-[13px]">
                  <span className="font-semibold">Terminal 4: </span>John F
                  Kennedy International Airport
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      s
    </div>
  );
}
