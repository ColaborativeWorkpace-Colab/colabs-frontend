import React from "react";
import ClientHeader from "../../header/ClientHeader";
import { AiOutlineFolderView } from "react-icons/ai";

const ApplicationDetail = () => {
  return (
    <div>
      <ClientHeader />
      <div className="mt-[100px] md:px-[80px] px-[10px]">
        <div className="shadow-sm flex gap-4 bg-gray-50 p-4">
          /job-applications/:job-application-id/:user-id
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;
