import React from "react";
import BackArrow from "../assets/BackArrow";

import UseWindowSize from "../util/windowAPI";

import NextImg from 'next/image'
interface AboutProps {
  about: boolean;
  setAbout: (about: boolean) => void;
}

const About: React.FC<AboutProps> = ({ about, setAbout }) => {
  const { width, height } = UseWindowSize();
 const Data = [
     {
         title: "Minted On",
         description: "20th August",
         img: "/assets/calender.png",
     },
     {
        title: "Active Platform",
        description: "Open Sea",
        img: "/assets/opensea.png"
    },
    {
        title: "Creator",
        description: "Dehidden",
        img: "/assets/dehidden.png"
    },
    {
        title: "Collection",
        description: "Shards of ETH",
        img: "/assets/shards.png"

    },
     
 ]

  const [open,setOpen] = React.useState(false);
    const InfoBox = ({title,description,img}:{
        title: string,
        description: string,
        img: string,
    }) => (
        <>
        <div className="p-4 col-span-2 sm:col-span-1">
              <h2 className="text-white py-4 font-gm-black  sm:py-0 text-lg sm:text-3xl  font-extrabold ">
               {title}
         </h2>
    
      <div className="sm:flex-grow flex mt-4 space-y-4 ">
        <NextImg src={img} width={50} height={50} />
        <p className="pl-4 font-gm-bold leading-relaxed text-lg font-medium">
        {description}
        </p>
      </div>
    </div>
    </>
    )
  return (
    <>
      <div className="  ">
        <p className="flex" onClick={() => setAbout(!about)}>
            <BackArrow className="h-6 w-6 mr-2 mb-4"/>
             Back to Utilities </p>

    <div className="flex gap-4 p-2 sm:hidden">
     <a className={!open ? "text-white" : "text-gray-400"} onClick={() => setOpen(false)}>Description</a>
     <a className={open ? "text-white" : "text-gray-400"} onClick={() => setOpen(true)}>Details</a>
     </div>
        <div className="bg-[#1a1a1a77] p-4 rounded-xl">
        <div className={width < 768  ? open ? "hidden" : "block" : "block"}>
        <h1 className="font-gm-black text-4xl">Shards of ETH - To the Moon</h1>
        <h2 className="font-gm-bold text-2xl pt-4 pb-4">
          An NFT family that consists of memorabilia enclosed in a crystal
          ether.
        </h2>
        <p className="font-gm-regular text-lg">
          This Shard symbolizes one of Technology's most significant moments
          embedded in the web3 layer of Ethereum. Shards of Eth are an emerging
          crypto asset, as their smart contract design prevents manipulation and
          duplication in the marketplace. Possessing a Shard grants you access
          to a set of unlockables powered by Dehidden, a game changing utility
          tech for NFTs.
        </p>
        </div>
        <div className={`${width < 768 ? !open ? "hidden" : "block" : "block"} grid grid-cols-2 sm:pt-4`}>
            {Data.map((v,i) => 
            <InfoBox title={v?.title} description={v?.description} img={v?.img} key={i}/>
            )}
        </div>
        </div>

       
      </div>
    </>
  );
};

export default About;
