import React from "react";
import FreelancerHeader from "../Header/Header";
import { LeftSide, RightSide } from "./components/SideComponents";
import PostContent from "./components/PostContent";

const FreelancerHomePage = () => {
	return (
		<div className="w-full h-full mt-[50px] px-[50px] py-8">
			<FreelancerHeader selectedNav={1} />
			<div className="flex gap-5 justify-start lg:justify-between">
				<LeftSide />
				<PostContent />
				<RightSide />
			</div>
			;
		</div>
	);
};

export default FreelancerHomePage;
