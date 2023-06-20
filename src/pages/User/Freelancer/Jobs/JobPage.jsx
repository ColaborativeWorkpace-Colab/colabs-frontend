import React, { useEffect } from "react";
import FreelancerHeader from "../Header/Header";
import JoblistComponent from "./components/JoblistComponent";
import MobileFilterSection from "./components/MobileFilterSection";
import { useState } from "react";
import { AiFillFilter } from "react-icons/ai";
import axios from "axios";
import { BaseURL } from "../../../../services/constants/Constants";

const JobPage = () => {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    try {
      const resp = await axios.get(BaseURL + "jobs");

      if (resp.status === 200) {
        setJobs(resp.data.jobs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const [leftPanelOpened, setLeftPanelOpened] = useState(false);

  return (
    <div className="">
      <FreelancerHeader selectedNav={2} />
      <div className="mt-[90px] md:flex gap-5 justify-between sm:px-8">
        <JoblistComponent jobs={jobs} />
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
