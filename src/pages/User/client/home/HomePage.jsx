import React from "react";
import { useNavigate } from "react-router-dom";
import ClientHeader from "../header/ClientHeader";

const ClientHomePage = () => {
	const navigate = useNavigate();
	return (
		<div className="">
			<ClientHeader />
		</div>
	);
};

export default ClientHomePage;
