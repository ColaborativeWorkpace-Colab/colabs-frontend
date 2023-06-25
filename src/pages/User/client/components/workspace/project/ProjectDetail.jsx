import React, { useEffect, useState } from "react";
import ClientHeader from "../../../header/ClientHeader";
import ProjectDetailSection from "./components/ProjectDetailSection";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../../../../../services/constants/Constants";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const token = localStorage.getItem("token");
  const [project, setProject] = useState({});

  const getProjectDetail = async () => {
    try {
      const resp = await axios.get(BaseURL + "projects/" + projectId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.status === 201) {
        setProject(resp.data.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getProjectDetail();
  }, [projectId]);
  return (
    <div>
      <ClientHeader />
      <div className="px-[80px]">
        <ProjectDetailSection project={project} />
      </div>
    </div>
  );
};

export default ProjectDetail;
