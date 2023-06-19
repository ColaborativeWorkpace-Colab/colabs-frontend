import React, { useState } from "react";
import starImg from "../../../../../assets/images/star.png";
import locationImg from "../../../../../assets/images/location.png";
import verifiedImg from "../../../../../assets/images/verify.png";
import { Link } from "react-router-dom";
import JobFilterSection from "./JobFilterSection";
function JoblistComponent() {
  let jobs = [1, 2, 3, 4, 5, 6];
  const [] = useState(false);

  return (
    <div className="flex gap-4 md:gap-6">
      <div className="h-screen bg-white flex justify-center items-center py-5 px-[10px]">
        <JobFilterSection />
      </div>
      <div className="bg-white flex flex-col px-6 py-6 gap-6">
        {jobs.map((value, key) => (
          <div className="job-content flex flex-col gap-3 w-full border-2 border-gray-100 p-5 rounded-lg">
            <div className="grow flex gap-4">
              <div className="grow flex justify-between">
                <Link to="/jobs/job-id" className="cursor-pointer ">
                  <div className="flex flex-col sm:flex-row justify-start items-center md:gap-2">
                    <h1 className="text-xl font-bold">
                      Create Figma Design For Web Application
                    </h1>
                  </div>
                  <div className="flex">
                    <p className="text-md text-slate-500">
                      Hourly: 100 ETB - 200 ETB - Remote Friendly - Est. Time: 1
                      to 3 months
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-md text-slate-500">posted:</span>

                    <p className="text-sm text-slate-500">2 Hours ago</p>
                  </div>
                </Link>
                <div
                  className="z-99 apply-button hidden md:block"
                  onClick={() => {
                    console.log("applied");
                  }}
                >
                  <Link
                    to="/jobs/job-id"
                    className="bg-purple-600 py-2 px-3 text-white text-md rounded-lg"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            </div>
            <div className="job-desrcription">
              <h1 className="text-md text-slate-800 md:pr-[110px]">
                Looking for UI/UX designers that are responsible for the design
                and implementation of all the experiences a user has when
                interacting with a digital tool, such as a website. experiences
                a user has when interacting with a digital tool, such as a
                website.
              </h1>
            </div>

            <div className="job-tasks flex flex-wrap justify-start gap-2 items-center">
              <p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-4 text-sm">
                User Interface Design
              </p>
              <p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-4 text-sm">
                Figma
              </p>
              <p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-4 text-sm">
                Html
              </p>
              <p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-4 text-sm">
                In Design
              </p>
              <p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-4 text-sm">
                Adobe XD
              </p>
              <p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-4 text-sm">
                Illustrator
              </p>
            </div>
            <div className="recruiter-status flex flex-col md:items-center md:flex-row gap-6">
              <div className="payment-verified flex items-center gap-3">
                <img src={verifiedImg} width={"20px"} height={"20px"} alt="" />
                <span className="text-slate-500">Payment Verified</span>
              </div>
              <div className="flex gap-3">
                <span>
                  <img src={starImg} width={"20px"} height={"20px"} alt="" />
                </span>
                <span>
                  <img src={starImg} width={"20px"} height={"20px"} alt="" />
                </span>
                <span>
                  <img src={starImg} width={"20px"} height={"20px"} alt="" />
                </span>
                <span>
                  <img src={starImg} width={"20px"} height={"20px"} alt="" />
                </span>
                <span>
                  <img src={starImg} width={"20px"} height={"20px"} alt="" />
                </span>
              </div>
              <div className="payment-verified flex items-center md:flex-row gap-3">
                <img src={locationImg} width={"20px"} height={"20px"} alt="" />
                <span className="grow text-slate-500">
                  Addis Ababa, Ethiopia
                </span>
              </div>
            </div>
            <div
              className="md:hidden apply-button w-full mt-2"
              onClick={() => {
                console.log("applied");
              }}
            >
              <button className="w-1/2 bg-purple-600 py-2 px-3 text-white text-md rounded-lg">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JoblistComponent;
