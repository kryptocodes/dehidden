import React from "react";
import NextImg from "next/image";


import DATA from "./Data";
import NFTBox from "./NFTBox";

const Landing: React.FC<any> = ({}) => {


  

  const BoxLayout = ({
    title,
    description,
    img,
  }: {
    title: string;
    description: string;
    img: string;
  }) => (
    <div className="p-4 mb-5 transform hover:-translate-y-1 transition duration-500 ease-in-out hover:bg-gradient-to-r from-[#FF2D62]/70 to-purple-500 rounded-lg  group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-5/6 flex gap-2 flex-row w-full rounded-xl bg-[#1A1A1A]/60   backdrop-filter backdroup-blur-lg    flex-wrap ">
      <div className="w-20 h-auto sm:mr-8  inline-flex items-center justify-center rounded-sm bg-[#282828]/40 p-4 rounded-2xl  backdrop-filter backdroup-blur-lg  flex-shrink-0">
        <NextImg src={img} width={100} height={100} />
      </div>
      <div className="sm:flex-grow flex-1 space-y-1">
        <h2 className="text-white py-4 font-gm-black  sm:py-0 text-lg sm:text-3xl  font-extrabold ">
          {title}
        </h2>
        <p className="hidden sm:block font-gm-bold leading-relaxed text-lg font-medium">
          {description}
        </p>
      </div>
    </div>
  );

  const OptionBox = () => (
    <>
      <div className="w-full flex flex-col items-center  mx-auto h-full">
        {DATA.map((v, i) => (
          <BoxLayout
            title={v?.title}
            description={v?.description}
            img={v?.img}
            key={i}
          />
        ))}
      </div>
    </>
  );

  return (
    <>
      <div className="w-full flex flex-col  relative sm:h-screen h-full    sm:flex-row ">
        <div className="sm:w-2/6 md:-mt-24 sm:p-0 p-4  relative z-50">
          <NFTBox/>
        </div>
        <div className="sm:w-4/6 pt-4 ">
          <OptionBox />
        </div>
      </div>
    </>
  );
};

export default Landing;
