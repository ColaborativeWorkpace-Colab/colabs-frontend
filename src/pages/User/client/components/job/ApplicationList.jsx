import React, { useEffect, useState } from "react";
import ClientHeader from "../../header/ClientHeader";
import { AiOutlineFolderView } from "react-icons/ai";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../../../../services/constants/Constants";

const ApplicationList = () => {
  const token = localStorage.getItem("token");
  const { jobId } = useParams();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const jobDetail = async () => {
      try {
        const applications = await axios.get(
          BaseURL + "jobs/applications/list/" + jobId,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        setApplications(applications.data.applications);
      } catch (error) {
        console.log(error);
      }
    };

    jobDetail();
  }, []);
  return (
    <div>
      <ClientHeader />
      <div className="mt-[100px] md:px-[80px] px-[10px]">
        <div className="shadow-sm flex flex-col gap-4 bg-gray-50 p-4">
          <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md">
            <p className="text-purple-600">Proposals({applications.length})</p>
            <span className="text-md md:text-xl">-</span>
            <p className="text-md md:text-xl">
              Create Figma Design For Web Application
            </p>
          </div>
          {applications.map((application, id) => (
            <div className="border-b-[2px] border-gray-200 pb-1 flex items-center justify-between">
              <p className="text-md text-slate-800">
                {application.workerId.firstName +
                  " " +
                  application.workerId.lastName}
              </p>
              <div className="flex gap-2">
                <Link
                  to={`/job-applications/${jobId}/${application._id}`}
                  className="bg-purple-600 hover:bg-purple-700 rounded-md px-3 py-2 text-white text-md text-slate-800"
                >
                  View
                </Link>
                <button className="bg-red-500 hover:bg-red-600 rounded-md px-3 py-2 text-white text-md text-slate-800">
                  Decline
                </button>
              </div>
            </div>
          ))}
          <div className="mt-2 flex gap-x-2 items-center">
            <span className="cursor-pointer">
              <MdOutlineArrowBackIosNew size={20} />
            </span>
            <p className="flex items-center justify-center rounded-md w-[25px] h-[25px] text-white text-md bg-gray-800">
              1
            </p>
            <span className="cursor-pointer">
              <MdOutlineArrowForwardIos size={20} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationList;
