import React from "react";
import "./style.css";
const ColabCard = ({ className, children }) => {
	return (
		<div
			className={`colab-card bg-white shadow-sm rounded-lg shadow-gray-300 ${className}`}
		>
			{children}
		</div>
	);
};

export default ColabCard;
