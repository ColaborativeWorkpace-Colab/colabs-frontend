import React from "react";
import FreelancerHeader from "../Header/Header";
import projectImage from "../../../../assets/images/job.png";
import { useNavigate } from "react-router-dom";
import WorkspaceDashboard from "./WorkspaceDashboard";
const WorkspacePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <FreelancerHeader selectedNav={5} />
      <div className="w-full h-full mt-[50px] px-12 py-8">
        <div className="workspace-header flex justify-between">
          <h1 className="text-2xl">Projects</h1>
          <button
            onClick={() => navigate("/projectdashborad")}
            className="bg-purple-500 rounded-md p-2 text-white"
          >
            Create project
          </button>
        </div>
        <div className="mt-4 flex justify-around md:justify-start gap-8">
          <form className="">
            <div className="relative">
              <input
                type="text"
                id="default-search"
                className="block w-[250px] p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="Search projects"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <span className="cursor-pointer">
                  <svg
                    aria-hidden="true"
                    className="ml-3 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </form>

          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-purple-400 hover:bg-purple-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            All colabs products{" "}
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-purple-100 rounded-lg shadow w-44 dark:bg-purple-700"
          >
            <ul
              className="py-2 text-sm text-gray-700"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-purple-100 dark:hover:bg-purple-600 dark:hover:text-white"
                >
                  Colabs software
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-purple-100 dark:hover:bg-purple-600 dark:hover:text-white"
                >
                  Colabs service management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-purple-100 dark:hover:bg-purple-600 dark:hover:text-white"
                >
                  Colabs work management
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/*TODO conditional page here if the user has a project already created display in table list here */}
        <div className="mt-[50px] flex gap-4 flex-col justify-center items-center">
          <img src={projectImage} alt="" className="w-[130px] h-[130px]" />
          <h1 className="text-center text-gray-900 text-2xl text-bold">
            You don't have any business projects
          </h1>
          <p className="text-center text-gray-700 w-[400px] md:w-[500px]">
            Create a new business project to manage tasks, monitor details, and
            measure performance with your team.
          </p>
          <button
            onClick={() => navigate("/projectdashborad")}
            className="bg-purple-700 rounded-md p-2 text-white"
          >
            Create project
          </button>
        </div>
      </div>
      ;
    </>
  );
};

export default WorkspacePage;
