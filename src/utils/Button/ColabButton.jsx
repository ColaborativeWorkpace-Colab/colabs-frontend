import React from "react";
import "./style.css";
const ColabButton = ({ onClick, text, className }) => {
	return <button className={`colab-button ${className}`}>{text}</button>;
};

export default ColabButton;
