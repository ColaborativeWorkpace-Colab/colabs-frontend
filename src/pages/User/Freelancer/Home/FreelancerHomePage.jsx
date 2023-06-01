import React from "react";
import FreelancerHeader from "../Header/Header";
import { LeftSide, PostContent, RightSide } from "./components/SideComponents";
import MainComponent from "./components/MainComponent";

const FreelancerHomePage = () => {
  return (
    <div className="w-full h-full mt-[50px] px-[50px] py-8">
      <FreelancerHeader selectedNav={1} />
      <div className="md:flex gap-5 justify-between">
        <LeftSide />
        <MainComponent />
        <RightSide />
      </div>
      ;
    </div>
  );
};

export default FreelancerHomePage;
