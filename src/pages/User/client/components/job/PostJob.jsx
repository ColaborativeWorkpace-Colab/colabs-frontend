import React from "react";
import Header from "../dashboard/components/Header";
import ClientHeader from "../../header/ClientHeader";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormicInput from "../../../../../utils/formik/FormicInput";
import FormicInputError from "../../../../../utils/formik/FormicInputError";
import FormikTextArea from "../../../../../utils/formik/FormikTextArea";
const PostJob = () => {
  return (
    <div>
      <div className="mt-[100px] md:px-[80px] px-[10px]">
        <ClientHeader selectedNav={2} />
        <div className="w-full lg:w-1/2  shadow-sm flex justify-center items-center gap-4 bg-gray-50 p-4 mx-auto">
          <form action="">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="cover-lettter" className="text-md text-slate-800">
                Job Title
              </label>
              <input
                className="px-4 py-2 rounded-md border-2 border-purple-600 focus:border-purple-600"
                placeholder="Enter job title here"
              />{" "}
            </div>
            <div className="flex flex-col gap-y-2 mt-3">
              <label htmlFor="cover-lettter" className="text-md text-slate-800">
                Job description
              </label>
              <textarea
                className="rounded-md border-2 border-purple-600 focus:border-purple-600"
                rows="4"
                cols="50"
                placeholder="Write job description here"
              ></textarea>{" "}
            </div>
            {/* estimatedDeadline: {
      type: String,
      required: true,
    },
    payRate */}
            <div className="flex flex-col gap-y-2 mt-4">
              <label htmlFor="cover-lettter" className="text-md text-slate-800">
                Estimated Deadline
              </label>
              <input
                className="px-4 py-2 rounded-md border-2 border-purple-600 focus:border-purple-600"
                placeholder="Enter time estimate here"
              />{" "}
            </div>
            <div className="flex flex-col gap-y-2 mt-4">
              <label htmlFor="cover-lettter" className="text-md text-slate-800">
                Pay rate
              </label>
              <input
                className="px-4 py-2 rounded-md border-2 border-purple-600 focus:border-purple-600"
                placeholder="Enter payrate here"
              />{" "}
            </div>
            <button className="py-2 px-4 bg-purple-700 hover:bg-purple-600 text-white text-md mt-4 rounded-md">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
