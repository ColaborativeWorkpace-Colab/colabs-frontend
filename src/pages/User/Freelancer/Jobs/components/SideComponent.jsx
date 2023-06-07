import React from "react";

const SideComponent = () => {
	return (
		<div className="left-side hidden md:block h-screen">
			<div className="job-sidebar p-5 flex flex-col md:w-[220px] lg:w-300px]  bg-white shadow shadow-sm h-screen">
				Job Filtering options sidebar
			</div>
		</div>
	);
};

export default SideComponent;
