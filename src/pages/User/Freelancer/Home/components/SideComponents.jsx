import React from "react";
import "./style.css";
import profileImg from "../../../../../assets/images/profile.jpg";
import { Link } from "react-router-dom";
export const RightSide = () => {
  return (
    <div className="h-screen p-4 right-side flex flex-col w-1/4 bg-slate-100">
      Right Side
    </div>
  );
};
export const LeftSide = () => {
  const skills = [
    {
      skill: "React.js",
    },
    {
      skill: "Express.js",
    },
    {
      skill: "Node.js",
    },
    {
      skill: "MySQL.js",
    },
    {
      skill: "Vimo.js",
    },
    {
      skill: "Angular.js",
    },
    {
      skill: "PHP",
    },
    {
      skill: "Vue.js",
    },
  ];
  return (
    <div className="left-side h-screen">
      <div className="profile p-5 flex flex-col justify-center">
        <Link
          to={"/profile"}
          className="profile-image mb-3 flex justify-center"
        >
          <img
            src={profileImg}
            alt="profile-image"
            className="cursor-pointer w-[100px] rounded-[50px] h-[100px] border-2 border-slate-300 p-0.5"
          />
        </Link>
        <div className="cursor-pointer text-center border-b-2 border-b-slate-400 w-full pb-3">
          <h1 className="text-xl text-slate-900">kebede Getahun</h1>
          <h1 className="text-md text-slate-500">Fullstack Developer</h1>
        </div>
        <div className="my-3 p-2 rounde-md flex flex-col justify-center bg-slate-200 w-full">
          <h1 className="text-slate-900">Profile Completeness:</h1>
          <div className="flex gap-2 items-center">
            <span className="bg-green-500 w-3/4 h-[5px] "></span>{" "}
            <span className="text-slate-900">100%</span>
          </div>
        </div>
        <div className="">
          <p className="my-3 w-full border-b-2 border-gray-400 text-xl">
            Skills
          </p>
          <div className="w-full flex flex-wrap  shrink gap-3">
            {skills.map((skill, id) => (
              <button className="bg-purple-600 px-2 py-2 rounded-lg text-white text-sm">
                {skill.skill}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full">
          <p className="mt-4 w-full border-b-2 border-gray-400 text-xl">
            My Rate
          </p>
          <p className="mt-2 w-full text-lg mb-2 flex gap-2 items-center">
            <span>
              <input
                type="number"
                defaultValue={"200"}
                className="w-[100px] h-[35px] rounded-md border-purple-600 focus:border-purple-600"
              />
            </span>{" "}
            ETB/Hr
          </p>
          <p className="w-full text-lg mb-2 flex gap-2 items-center">
            <span>
              <input
                type="number"
                defaultValue={"20,000"}
                className="w-[100px] h-[35px] rounded-md border-purple-600 focus:border-purple-600"
              />
            </span>{" "}
            Fixed
          </p>
        </div>
      </div>
    </div>
  );
};
