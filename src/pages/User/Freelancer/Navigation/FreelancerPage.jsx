import React from "react";
import { Routes, Route } from "react-router-dom";
import FreelancerHeader from "../Header/Header";
import { routes } from "./routes";
const FreelancerPage = () => {
	return (
		<>
			<div className="m-2"></div>
			<Routes>
				{routes.map((route) => (
					<Route path={route.path} element={route.element} />
				))}
			</Routes>
		</>
	);
};

export default FreelancerPage;
