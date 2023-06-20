import React from "react";
import FreelancerHeader from "../../Header/Header";

const ApplyPage = () => {
  return (
    <div>
      <div className="mt-[100px] md:px-[80px] px-[10px]">
        <FreelancerHeader selectedNav={2} />
        <div className="w-full lg:w-1/2  shadow-md flex justify-center items-center gap-4 p-4 mx-auto">
          <form action="">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="cover-lettter" className="text-md text-slate-800">
                Cover Letter
              </label>
              <textarea
                className="rounded-md border-2 border-purple-600 focus:border-purple-600"
                rows="4"
                cols="50"
                placeholder="Write cover letter here"
              ></textarea>{" "}
            </div>
            <button className="py-2 px-4 bg-purple-700 hover:bg-purple-600 text-white text-md mt-4 rounded-md">
              submit peoposal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
