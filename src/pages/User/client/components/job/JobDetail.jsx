import React from "react";
import Header from "../dashboard/components/Header";
import ClientHeader from "../../header/ClientHeader";
import { AiOutlineFolderView } from "react-icons/ai";
import { Link } from "react-router-dom";

const ClientJobDetail = () => {
  return (
    <div>
      <ClientHeader />
      <div className="mt-[100px] md:px-[80px] px-[10px]">
        <div className="shadow-sm flex gap-4 bg-gray-50 p-4">
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
              <p className="text-md text-gray-600 cursor-pointer">
                Proposals: <span>50+</span>
              </p>
            </div>
            <div className="mt-4 flex gap-4 border-t-2 border-gray-100 py-2">
              <button className="text-md text-gray-600 rounded-md text-white bg-red-500 hover:bg-red-700 px-4 py-2">
                Remove This Job Post
              </button>
              <button className="text-md text-gray-600 rounded-md text-white bg-gray-500 hover:bg-gray-700 px-4 py-2">
                Close This Job Post
              </button>
            </div>
          </div>
          <div className="relative w-1/4 h-[400px] flex flex-col items-center bg-gray-200 p-4 rounded-lg border-2 border-white">
            <p className="text-xl text-slate-800">Applicants(10)</p>
            <span className="w-full h-[2px] my-2 bg-white"></span>
            <div className="w-full grow overflow-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5].map(
                (application, id) => (
                  <Link
                    to={"/job-applications/:job-application-id/:user-id"}
                    className="cursor-pointer flex px-2 items-center border-b-[1px] border-purple-300"
                  >
                    <p className="grow text-blue-600 text-lg my-1">
                      Kalkidan Getahun
                    </p>
                    <span className="w-[15px] ">
                      <AiOutlineFolderView color="purple" size={20} />
                    </span>
                  </Link>
                )
              )}
            </div>
            <div className="absolute bottom-[5px] bg-gray-200 w-full flex justify-center py-1">
              <Link
                to={"/job-applications"}
                className="text-md text-gray-600 rounded-md text-white bg-purple-500 hover:bg-gray-700 px-4 py-2"
              >
                View All Applications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientJobDetail;
