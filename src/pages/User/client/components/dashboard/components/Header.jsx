import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between bg-purple-50 p-4 rounded-md">
      <div className="">
        <h1 className="font-medium text-2xl text-slate-900">Your Dashboard</h1>
        <p className="text-slate-800">kebede</p>
      </div>
      <div className="">
        <button className="bg-purple-800 py-2 px-4 rounded-md text-white">
          Post Job
        </button>
      </div>
    </div>
  );
};

export default Header;
