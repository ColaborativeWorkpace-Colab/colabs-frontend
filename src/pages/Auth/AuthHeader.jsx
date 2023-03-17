import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const AuthHeader = ({ to, text, actionName }) => {
	return (
		<nav className="z-20 bg-slate-200 fixed w-full top-0 left-0 p-2">
			<div className="flex flex-wrap justify-between">
				<Link to="/" className="flex items-center">
					<img src={logo} className="h-6 mr-3 sm:h-9" alt="kaliget Logo" />
				</Link>
				<div className="flex ">
					<p className="text-lg">
						{text}
						<Link to={`${to}`} className="hover:underline text-purple-600 mx-2">
							{actionName}
						</Link>
					</p>
				</div>
			</div>
		</nav>
	);
};

export default AuthHeader;
