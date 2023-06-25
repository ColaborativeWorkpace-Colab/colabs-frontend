import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProgressList from "./ProgressList";
import FreelancerWorkspaceHeader from "../../header/FreelancerWorkspaceHeader";
import FreelancerWorkspaceSideBar from "../../SideBar";

const FreelancerWorkspaceProgressSection = () => {
  const [leftPanelOpened, setLeftPanelOpened] = useState(false);
  return (
    <div className="h-full">
      <FreelancerWorkspaceHeader />
      <div className="relative top-[120px] flex gap-3 px-[10px] md:px-[80px]">
        <FreelancerWorkspaceSideBar selectedItem={2} />
        <div className="w-full mb-[200px]">
          <div className="overflow-x-scroll scrolling-touch">
            <ProgressList />
          </div>
        </div>

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

export default FreelancerWorkspaceProgressSection;
