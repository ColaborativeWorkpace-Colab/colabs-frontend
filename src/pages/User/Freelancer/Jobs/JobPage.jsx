import React from "react";
import FreelancerHeader from "../Header/Header";
import SideComponent from "./components/SideComponent";
import JoblistComponent from "./components/JoblistComponent";

const JobPage = () => {
	return (
		<div className="">
			<FreelancerHeader selectedNav={2} />
			<div className="mt-[90px] md:flex gap-5 justify-between sm:px-8">
				<SideComponent />
				<JoblistComponent />
			</div>
			;
		</div>
	);
};

export default JobPage;
