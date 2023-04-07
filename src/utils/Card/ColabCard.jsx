import React from "react";
import "./style.css";
const ColabCard = ({ className, child }) => {
	return <div className={`colab-card ${className}`}>{child}</div>;
};

export default ColabCard;
