import React from "react";
import "./style.css";
import sampleImg from "../../../../assets/images/account.png";
import closeImg from "../../../../assets/images/close.png";
import { useNavigate } from "react-router-dom";
import WorkspaceSidebar from "./components/WorkspaceSidebar";
import { IoMdNotifications } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";

const WorkspaceDashboard = () => {
	const navigate = useNavigate();
	return (
		<div className="">
			<div className="px-4 bg-white shadow-sm w-full h-[70px] flex justify-between items-center">
				<div className="flex items-center gap-x-4">
					<span onClick={() => navigate("/workspace")}>
						<img
							src={closeImg}
							alt="close"
							className="ml-2 cursor-pointer w-[40px] h-[40px]"
						/>
					</span>
					<h1 className="text-lg md:text-xl font-bold text-slate-900">
						COLABS<span className="text-purple-500"></span>.
					</h1>
				</div>
				<div className="flex gap-x-4 mr-10">
					<span>
						<IoMdNotifications size={25} color="purple" />
					</span>
					{/* <span>
						<TbMessageCircle size={25} color="purple" />
					</span> */}
				</div>
			</div>
			<div className="flex mt-4 gap-x-4">
				<div className="w-1/5 h-[600px] bg-white shadow-md">
					<WorkspaceSidebar />
				</div>

				{/* TODO dashboard body part */}
				<div className="grow h-[600px] bg-white shadow-md mr-5"></div>
			</div>
		</div>
	);
};

export default WorkspaceDashboard;
