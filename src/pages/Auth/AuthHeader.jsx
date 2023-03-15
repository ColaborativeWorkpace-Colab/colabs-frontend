import React from "react";
import logo from "../../assets/images/logo.png";

const AuthHeader = () => {
	return (
		<nav className="bg-white fixed w-full top-0 left-0 p-2">
			<div className="flex flex-wrap justify-between">
				<a href="https://kaliget.com/" className="flex items-center">
					<img src={logo} className="h-6 mr-3 sm:h-9" alt="kaliget Logo" />
				</a>
			</div>
		</nav>
	);
};

export default AuthHeader;
