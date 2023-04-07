import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
const Navigation = () => {
	return (
		<Routes>
			{routes.map((route, key) => (
				<Route key={key} path={route.path} element={route.element} />
			))}
		</Routes>
	);
};

export default Navigation;
