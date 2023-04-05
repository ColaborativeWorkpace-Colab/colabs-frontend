import React from "react";
import FreelancerHeader from "../Header/Header";
import SideComponent from "./components/SideComponent";
import JoblistComponent from "./components/JoblistComponent";

const JobPage = () => {
	return (
		<div className="px-[50px]">
			<FreelancerHeader selectedNav={2} />
			<div className="mt-[90px] md:flex gap-5 justify-between px=8">
				<SideComponent />
				<JoblistComponent />
			</div>
			;
		</div>
	);
};

export default JobPage;
