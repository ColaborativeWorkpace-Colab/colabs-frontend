import React from "react";
import "./style.css";
const ColabCard = ({ className, children }) => {
	return <div className={`colab-card ${className}`}>{children}</div>;
};

export default ColabCard;
