import React from "react";
import "./style.css";
const ColabButton = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`colab-button ${className}`}>
      {children}
    </button>
  );
};

export default ColabButton;
