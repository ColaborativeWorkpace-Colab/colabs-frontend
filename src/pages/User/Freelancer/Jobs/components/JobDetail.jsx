import React from "react";
import { AiOutlineFolderView } from "react-icons/ai";
import { Link } from "react-router-dom";
import FreelancerHeader from "../../Header/Header";

const JobDetail = () => {
  return (
    <div>
      <FreelancerHeader selectedNav={2} />
      <div className="mt-[100px] md:px-[80px] px-[10px]">
        <div className="shadow-md flex gap-4 p-4">
          <div className="w-3/4 flex flex-col">
            <p className="text-xl"> Create Figma Design For Web Application</p>
            <p className="text-md py-2 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              fuga maiores incidunt nemo et, commodi, asperiores eligendi quos
              optio accusantium unde dolore fugiat adipisci eveniet veniam sit
              quidem voluptates mollitia!
            </p>
            <p className="text-xl py-2">Skills</p>
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
            <p className="text-xl pt-4 pb-2">Required Skills</p>
            <div className="job-tasks flex flex-wrap justify-start gap-2 items-center">
              <p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-4 text-sm">
                Html
              </p>
              <p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-4 text-sm">
                CSS
              </p>
              <p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-4 text-sm">
                Javascript
              </p>
            </div>
            <div className="mt-4 flex gap-4 border-t-2 border-gray-100 py-2">
              <p className="text-md text-gray-600">
                Budget: <span>10,000 ETB</span>
              </p>
            </div>
          </div>
          <div className="relative w-1/4 h-[200px] flex flex-col items-center bg-gray-200 p-4 rounded-lg border-2 border-white">
            <p className="text-xl text-slate-800">Activity on this job</p>
            <span className="w-full h-[2px] my-2 bg-white"></span>
            <div className="w-full grow overflow-auto">
              <p className="text-slate-800 text-sm">Applications: 50+</p>
            </div>
            <div className="absolute bottom-[5px] bg-gray-200 w-full flex justify-center py-1">
              <Link
                to={"/jobs/job-id/apply"}
                className="text-md text-gray-600 rounded-md text-white bg-purple-500 hover:bg-purple-600 px-4 py-2"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
