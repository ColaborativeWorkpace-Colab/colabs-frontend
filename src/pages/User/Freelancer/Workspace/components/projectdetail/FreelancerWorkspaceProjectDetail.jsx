import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
import FreelancerWorkspaceHeader from "../../header/FreelancerWorkspaceHeader";
import ProjectDetailBody from "./ProjectDetailBody";
import ProjectDetailSidebar from "./ProjectDetailSidebar";
import ProjectDetailRightSide from "./ProjectDetailRightSide";
const FreelancerWorkspaceProjectDetail = () => {
  const [leftPanelOpened, setLeftPanelOpened] = useState(false);
  return (
    <div className="h-full">
      <FreelancerWorkspaceHeader />
      <div className="relative top-[70px] flex gap-3 px-[10px] md:px-[10px]">
        <ProjectDetailSidebar selectedItem={1} />
        <div className="w-full mb-[200px] grow">
          <div className="overflow-x-scroll scrolling-touch">
            <ProjectDetailBody />
          </div>
        </div>
        <ProjectDetailRightSide />

        <button
          onClick={() => setLeftPanelOpened(!leftPanelOpened)}
          title="Filter Scale"
          className="md:hidden fixed z-90 bottom-10 right-8 bg-blue-500 w-[60px] h-[60px] rounded-full drop-shadow-md flex justify-center items-center text-white hover:drop-shadow-2xl duration-300"
        >
          <AiOutlineMenuUnfold color="white" size={"25"} />
        </button>
      </div>
    </div>
  );
};

export default FreelancerWorkspaceProjectDetail;
