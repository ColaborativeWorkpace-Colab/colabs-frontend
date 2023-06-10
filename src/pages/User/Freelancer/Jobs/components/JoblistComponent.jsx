import React, { useState } from "react";
import starImg from "../../../../../assets/images/star.png";
import locationImg from "../../../../../assets/images/location.png";
import enterpriseImg from "../../../../../assets/images/enterprise.png";
import verifiedImg from "../../../../../assets/images/verify.png";
import bookmarkImg from "../../../../../assets/images/bookmark.png";
import { roles, industry, location, salary } from "../data";
function JoblistComponent() {
  let jobs = [1, 2, 3, 4, 5, 6];
  const [] = useState(false);

  return (
    <div className="md:grow flex flex-col gap-4 md:gap-6 w-full">
      <div className="bg-white flex justify-center items-center py-5 px-[50px]">
        <div className="w-full flex justify-between">
          <div className="">
            <h1 className="text-md font-semibold text-slate-800 mb-2 pb-1 border-b-2 border-purple-700">
              Role
            </h1>
            <div className="flex flex-col gap-y-2">
              {roles.map((role, id) => (
                <div key={id} className="flex items-center">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-purple-600 bg-gray-100 border-purple-300 rounded"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {role.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="text-md font-semibold text-slate-800 mb-2 pb-1 border-b-2 border-purple-700">
              Industry
            </h1>
            <div className="flex flex-col gap-y-2">
              {industry.map((role, id) => (
                <div key={id} className="flex items-center">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-purple-600 bg-gray-100 border-purple-300 rounded"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {role.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="text-md font-semibold text-slate-800 mb-2 pb-1 border-b-2 border-purple-700">
              Location
            </h1>
            <div className="flex flex-col gap-y-2">
              {location.map((role, id) => (
                <div key={id} className="flex items-center">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-purple-600 bg-gray-100 border-purple-300 rounded"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {role.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="text-md font-semibold text-slate-800 mb-2 pb-1 border-b-2 border-purple-700">
              Salary
            </h1>
            <div className="flex flex-col gap-y-2">
              {salary.map((role, id) => (
                <div key={id} className="flex items-center">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-purple-600 bg-gray-100 border-purple-300 rounded"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {role.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-full flex flex-col px-6 py-6 gap-6">
        {jobs.map((value, key) => (
          <div className="cursor-pointer job-content flex flex-col gap-3 w-full border-2 border-gray-100 p-5 rounded-lg">
            <div className="grow flex gap-4">
              <div className="hidden md:block company-logo">
                <img
                  src={enterpriseImg}
                  width={"50px"}
                  height={"50px"}
                  alt="image here"
                />
              </div>
              <div className="grow flex justify-between">
                <div className="">
                  <div className="flex flex-col sm:flex-row justify-start items-center md:gap-2">
                    <h1 className="text-xl font-bold">
                      Create Figma Design For Web Application
                    </h1>
                    {/* <p className="hidden sm:block text-sm text-slate-500">-</p> */}
                  </div>
                  <div className="flex">
                    <p className="text-md text-slate-500">
                      Hourly: 100 ETB - 200 ETB - Remote Friendly - Est. Time: 1
                      to 3 months
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-md text-slate-500">
                      posted:{" "}
                    </span>

                    <p className="text-sm text-slate-500">2 Hours ago</p>
                  </div>
                </div>
                <div
                  className="z-99 apply-button hidden md:block"
                  onClick={() => {
                    console.log("applied");
                  }}
                >
                  <button className="bg-purple-600 py-2 px-3 text-white text-md rounded-lg">
                    Apply
                  </button>
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
