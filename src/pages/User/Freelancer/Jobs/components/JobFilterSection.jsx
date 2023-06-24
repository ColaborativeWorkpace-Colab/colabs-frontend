import React from "react";
import { roles, industry, location, salary } from "../data";

const JobFilterSection = () => {
  return (
    <div className="relative w-[250px] flex flex-col gap-y-4">
      <div className="bg-gray-200 text-center py-2 text-xl font-medium">
        Filter Here
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-purple-600 bg-gray-100 border-purple-300 rounded"
          />
          <label
            htmlFor="checked-checkbox"
            className="ml-2 text-lg text-gray-900 dark:text-gray-300"
          >
            Most recent
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-purple-600 bg-gray-100 border-purple-300 rounded"
          />
          <label
            htmlFor="checked-checkbox"
            className="ml-2 text-lg text-gray-900 dark:text-gray-300"
          >
            Payment Verified
          </label>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <label
            for="large-range"
            className="ml-2 text-lg text-gray-900 dark:text-gray-300"
          >
            Salary range
          </label>
          <input
            id="large-range"
            type="range"
            value="50"
            min="50"
            max="50000"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default JobFilterSection;
