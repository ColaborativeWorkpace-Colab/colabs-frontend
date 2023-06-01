import React from "react";
import FreelancerHeader from "../Header/Header";
import JoblistComponent from "./components/JoblistComponent";
import MobileFilterSection from "./components/MobileFilterSection";
import { useState } from "react";
import { AiFillFilter } from "react-icons/ai";
const JobPage = () => {
  const [leftPanelOpened, setLeftPanelOpened] = useState(false);

  return (
    <div className="">
      <FreelancerHeader selectedNav={2} />
      <div className="mt-[90px] md:flex gap-5 justify-between sm:px-8">
        <JoblistComponent />
        <button
          onClick={() => setLeftPanelOpened(!leftPanelOpened)}
          title="Filter Scale"
          className="md:hidden fixed z-90 bottom-10 right-8 bg-blue-500 w-[60px] h-[60px] rounded-full drop-shadow-md flex justify-center items-center text-white hover:drop-shadow-2xl duration-300"
        >
          <AiFillFilter color="white" size={"25"} />
        </button>
      </div>

      <MobileFilterSection
        setLeftPanelOpened={setLeftPanelOpened}
        leftPanelOpened={leftPanelOpened}
      />
    </div>
  );
};

export default JobPage;
