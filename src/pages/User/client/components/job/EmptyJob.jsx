import React from "react";
import projectImage from "../../../../../assets/images/job.png";

const EmptyJob = () => {
  return (
    <div className="shadow-sm p-4 mt-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-medium text-2xl">Your Posts</h1>
        </div>
        <div>
          <h1 className="text-sm text-blue-600 cursor-pointer">
            See all postings
          </h1>
        </div>
      </div>

      <div className="mt-[50px] h-[220px] flex flex-col gap-3 justify-center items-center">
        <img src={projectImage} alt="" className="w-[130px] h-[130px]" />
        <h1 className="text-center text-gray-900 text-2xl text-bold">
          No active job posts
        </h1>
        <p className="text-center text-gray-700 w-[400px] md:w-[500px] px-10">
          Post a job to the marketplace and let talent come to you.
        </p>
        <button
          onClick={() => navigate("/projectdashborad")}
          className="bg-purple-800 rounded-md p-2 text-white"
        >
          Post Jobs
        </button>
      </div>
    </div>
  );
};

export default EmptyJob;
