import React from "react";
import { dashboardNav } from "./data";
const WorkspaceSidebar = () => {
	return (
		<div id="nav" className="w-full px-6 flex flex-col gap-4 pt-6">
			{dashboardNav.map((item) => (
				<div key={item.id} className={item.containerClassName}>
					<span>{item.icon}</span>
					<span className={item.titleClassName}>{item.title}</span>
				</div>
			))}
		</div>
	);
};

export default WorkspaceSidebar;
