import React from "react";
import NextImg from "next/image";
import { Button } from "../button";
import InfoSVG from "../assets/InfoSVG";

import DATA from "./Data";
import WindowAPI from "../util/windowAPI";
import OpenSea from "../assets/OpenSea";

const Landing: React.FC<any> = ({}) => {
  const { width, height } = WindowAPI();
  console.log(width);

  const NFTBox = () => (
    <>
      <div className="w-full z-50 py-8 rounded-2xl h-full relative  mx-auto sm:min-h-screen sm:pt-32 bg-white/5  backdrop-filter backdroup-blur-lg ">
        <div className="z-50">
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="h-52 mx-auto flex rounded-xl align-content justify-content w-52"
          >
            <source
              src="https://c.tenor.com/BPmtije5XIsAAAAC/cool-cats.gif"
              type="video/mp4"
              height={"auto"}
              width={"auto"}
            />
          </video> */}

         

          <div className="font-bold text-center pt-8">
            <h1 className="text-2xl mb-2">Shards of ETH</h1>
            <h2 className="text-4xl mb-2">Level Up</h2>
            <h3 className="text-2xl font-medium">#007</h3>
            <Button
              className="rounded-2xl mt-8"
              color="primary"
              size="sm"
              ring="small"
            >
              <a
                href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/20361720196251722520255843584474688316908758145602765193901507439086389952513"
                className="flex gap-2"
              >
                {width > 768 ? (
                  
                <>
                <InfoSVG className="h-6 w-6" />
                
                <p className="mt-0">About</p>
                </>
                ) :

                <>
                  <OpenSea className="h-6 w-6" />
                  <p className="mt-0">View on OpenSea</p>
                </> }
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );

  const BoxLayout = ({
    title,
    description,
    img,
  }: {
    title: string;
    description: string;
    img: string;
  }) => (
    <div className="p-4 mb-5 w-5/6 flex gap-2 flex-row w-full rounded-xl bg-[#1A1A1A]/60   backdrop-filter backdroup-blur-lg    flex-wrap ">
      <div className="w-20 h-auto sm:mr-8  inline-flex items-center justify-center rounded-sm bg-[#282828]/40 p-4 rounded-2xl  backdrop-filter backdroup-blur-lg  flex-shrink-0">
        <NextImg src={img} width={100} height={100} />
      </div>
      <div className="sm:flex-grow flex-1 space-y-1">
        <h2 className="text-white py-4  sm:py-0 text-lg sm:text-2xl  font-extrabold ">
          {title}
        </h2>
        <p className="hidden sm:block leading-relaxed text-base font-medium">
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
          <NFTBox />
        </div>
        <div className="sm:w-4/6 pt-4 ">
          <OptionBox />
        </div>
      </div>
    </>
  );
};

export default Landing;
