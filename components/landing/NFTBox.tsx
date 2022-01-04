import React from "react";
import InfoSVG from "../assets/InfoSVG";
import OpenSea from "../assets/OpenSea";
import { Button } from "../button";
import WindowAPI from '../util/windowAPI'

interface NFTBoxProps {
  about: boolean;
  setAbout: (about: boolean) => void;
}

const NFTBox: React.FC<NFTBoxProps> = ({about,setAbout}) => {
  const { width, height } = WindowAPI();
  return (
    <>
      <div className="w-full z-50 py-8 rounded-2xl h-full relative  mx-auto sm:min-h-screen sm:pt-32 bg-white/5  backdrop-filter backdroup-blur-lg ">
        <div className="z-50">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-52 mx-auto flex  hover:-translate-y-2 transition duration-1000 ease-in-out rounded-xl shadow-lg align-content justify-content w-52"
          >
            <source
              src="/assets/minecraft.mp4"
              type="video/mp4"
              height={100}
              width={100}
            />
          </video>

          <div className="font-gm-black text-center pt-8">
            <h1 className="text-2xl mb-2">Shards of ETH</h1>
            <h2 className="text-5xl mb-4">Level Up</h2>
            <h3 className="text-2xl ">#007</h3>
            <Button
              className="rounded-2xl mt-8"
              color="primary"
              size="sm"
              ring="small"
            >
              <a
                onClick={() => setAbout(true)}
                className="flex gap-2"
              >
                {!about ? (
                  <>
                    <InfoSVG className="h-6 w-6" />
                    <p className="mt-0">About</p>
                  </>
                ) : (
                  <>
                    <OpenSea className="h-6 w-6" />
                    <p className="mt-0">View on OpenSea</p>
                  </>
                )}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTBox;

