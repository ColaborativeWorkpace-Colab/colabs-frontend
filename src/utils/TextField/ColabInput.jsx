import React from "react";
import "./style.css";
const ColabInput = ({
	value,
	name,
	type,
	onChange,
	inputType,
	placeholder,
	className,
	required,
}) => {
	return (
		<input
			name={name}
			type={type}
			value={value}
			onChange={onChange}
			className={`colab-input ${className}`}
			placeholder={placeholder}
			typeof={inputType}
			required={required}
		/>
	);
};

export default ColabInput;
