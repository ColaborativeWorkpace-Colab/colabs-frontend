import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between bg-purple-200 p-4 rounded-md">
      <div className="">
        <h1 className="font-medium text-2xl text-slate-900">Your Dashboard</h1>
      </div>
      <div className="">
        <Link
          to={"/post-job"}
          className="bg-purple-800 py-2 px-4 rounded-md text-white"
        >
          Post Job
        </Link>
      </div>
    </div>
  );
};

export default Header;
