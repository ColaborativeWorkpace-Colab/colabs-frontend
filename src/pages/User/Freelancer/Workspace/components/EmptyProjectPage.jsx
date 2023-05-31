import React from "react";
import projectImage from "../../../../../assets/images/job.png";

const EmptyProjectPage = () => {
	return (
		<div className="mt-[50px] flex flex-col justify-center items-center">
			<img src={projectImage} alt="" className="w-[130px] h-[130px]" />
			<h1 className="text-center text-gray-900 text-2xl text-bold">
				You don't have any business projects
			</h1>
			<p className="text-center text-gray-700 w-[400px] md:w-[500px] p-10">
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
	);
};

export default EmptyProjectPage;
