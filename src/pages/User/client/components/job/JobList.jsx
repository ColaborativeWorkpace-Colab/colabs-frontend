import React from "react";
import { Link } from "react-router-dom";

const JobList = () => {
  return (
    <div className="w-full flex flex-col gap-3 shadow-sm border-2 border-gray-50 rounded-md">
      {[1, 2, 3, 4, 5].map((job, id) => (
        <div className="flex flex-col justify-between px-4 py-2 border-2 border-gray-100 rounded-md">
          <div className="flex items-center justify-between">
            <p className="text-md md:text-xl">
              Create Figma Design For Web Application
            </p>
            <Link
              to="/post-job-detail"
              className="text-white bg-purple-600 rounded-md px-4 py-2"
            >
              View Detail
            </Link>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-400 text-sm">7 hour ago</p>
            <p className="text-gray-400 text-sm cursor-pointer">50 Proposals</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
