import { NextPage } from "next";
import React from "react";
import BlueDrop from "../components/assets/BlueDrop";
import ColorDrop from "../components/assets/ColorDrop";
import Logo from "../components/assets/Logo";
import MixedDrop from "../components/assets/MixedDrop";
import Landing from "../components/landing";
import Wrapper from "../components/shared/Wrapper";

const index: NextPage = ({}) => {
  return (
    <>
      <Wrapper title="Assignment">
        <div className=" -top-96 sm:top-0  -left-20 absolute  sm:w-full  ">
          <BlueDrop className="w-96 opacity-80  sm:w-auto " />
        </div>
        <div className="bottom-0 -left-52 sm:-top-[400px] sm:left-96 absolute  sm:w-full  ">
          <MixedDrop className=" opacity-80  sm:w-auto " />
        </div>
        <div className="sm:left-[500px] -right-[400px] sm:-bottom-[1000px] absolute  sm:w-full  ">
          <ColorDrop className="opacity-80 sm:animate-pulse  sm:w-auto " />
        </div>

        <div>
          <Landing />
        </div>
        <div className=" sm:bottom-20  left-10 absolute  sm:w-full  ">
          <Logo className="w-26 h-26 " />
        </div>
      </Wrapper>
    </>
  );
};

export default index;
