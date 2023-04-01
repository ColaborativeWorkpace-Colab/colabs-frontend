import React from "react";
import "./style.css";
export const ColabLargeText = ({ className, text }) => {
	return <p className={`colab-large-text ${className}`}>{text}</p>;
};
export const ColabMediumText = ({ className, text }) => {
	return <p className={`colab-medium-text ${className}`}>{text}</p>;
};
export const ColabSmallText = ({ className, text }) => {
	return <p className={`colab-small-text ${className}`}>{text}</p>;
};
