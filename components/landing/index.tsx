import React from "react";
import NextImg from "next/image";

interface indexProps {}

const Landing: React.FC<indexProps> = ({}) => {


  const NFTBox = () => (
    <>
      <div className="w-full h-full mx-auto sm:min-h-screen sm:pt-32 bg-gray-500  backdrop-filter backdroup-blur-lg bg-opacity-30">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-52 mx-auto flex rounded-xl align-content justify-content w-52"
        >
          <source
            src="https://demo.cope.studio/dehidden/Eth%20spins/Shiba0001-0600.mp4"
            type="video/mp4"
            height={'auto'}
            width={'auto'}
          />
        </video>

<div className="font-bold text-center pt-4">
        <h1 className="text-2xl mb-2">Shards of ETH</h1>
        <h2 className="text-4xl mb-2">Level Up</h2>
        <h3 className="text-2xl mb-2 font-medium">#007</h3>
        </div>
      </div>
    </>
  );

  const BoxLayout = () => (
    <div className="p-2 w-5/6 flex flex-row">
      <div className="flex w-full rounded-lg bg-gray-900  p-4  backdrop-filter backdroup-blur-lg  bg-opacity-30  flex-wrap">
        <div className="w-20 h-auto sm:mr-8  inline-flex items-center justify-center rounded-sm bg-gray-500 p-2 rounded-lg  backdrop-filter backdroup-blur-lg bg-opacity-30 flex-shrink-0">
          <NextImg src={"/assets/IPFS.png"} width={100} height={100} />
        </div>
        <div className="sm:flex-grow">
          <h2 className="text-white text-lg title-font font-extrabold ">
            View on IPFS/ ARWEAVE
          </h2>
          <p className="hidden sm:block leading-relaxed text-base font-medium">
            See the unlockables for this NFT on the link provided
          </p>
        </div>
      </div>
    </div>
  );

  const OptionBox = () => (
    <>
      <div className="w-full flex flex-col items-center justify-center  mx-auto">
        <BoxLayout />
        <BoxLayout />
        <BoxLayout />
        <BoxLayout />
      </div>
    </>
  );

  return (
    <>
    

      <div className="w-full h-full flex flex-col sm:flex-row ">
        <div className="sm:w-2/6 md:-mt-24  ">
          <NFTBox />
        </div>
        <div className="sm:w-4/6">
          <OptionBox />
        </div>
      </div>
    </>
  );
};

export default Landing;
