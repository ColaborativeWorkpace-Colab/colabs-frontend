import React from "react";
import FreelancerHeader from "../Header/Header";
import SideComponent from "./components/SideComponent";
import JoblistComponent from "./components/JoblistComponent";

const JobPage = () => {
	return (
		<div className="px-[50px] py-8">
			<FreelancerHeader selectedNav={2} />
			<div className="mt-[60px] md:flex gap-5 justify-between">
				<SideComponent />
				<JoblistComponent />
			</div>
			;
		</div>
	);
};

export default JobPage;
