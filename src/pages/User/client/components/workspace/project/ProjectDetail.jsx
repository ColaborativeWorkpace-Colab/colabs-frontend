import React from "react";
import ClientHeader from "../../../header/ClientHeader";
import ProjectDetailSection from "./components/ProjectDetailSection";

const ProjectDetail = () => {
  return (
    <div>
      <ClientHeader />
      <div className="px-[80px]">
        <ProjectDetailSection />
      </div>
    </div>
  );
};

export default ProjectDetail;
