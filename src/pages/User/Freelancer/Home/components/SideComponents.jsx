import React from "react";
import "./style.css";
import profileImg from "../../../../../assets/images/profile.jpg";
import photoImg from "../../../../../assets/images/photo.png";
import videoImg from "../../../../../assets/images/video.png";
import audioImg from "../../../../../assets/images/audio.png";
import contentImg from "../../../../../assets/images/blog.png";
// import { ProfileEditPage } from "../../Profile";
import { Link } from "react-router-dom";
export const RightSide = () => {
  return (
    <div className="right-side flex flex-col w-1/4 bg-slate-100">
      Right Side
    </div>
  );
};
export const LeftSide = () => {
  return (
    <div className="left-side">
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
      </div>
    </div>
  );
};

export const PostContent = () => {
  return (
    <div className="main-content">
      <div className="post-content bg-white shadow-sm rounded-lg shadow-gray-300 w-full">
        <div className="flex items-center gap-4 px-5 py-2">
          <div className="profile-image flex items-center align-center">
            <img
              src={profileImg}
              alt="profile-image"
              className="cursor-pointer w-[60px] rounded-[30px] h-[60px] border-2 border-slate-300 p-0.5"
            />
          </div>
          <input
            className="hover:bg-gray-300 cursor-pointer grow rounded-[40px] border-2 border-slate-400 px-[20px] h-[50px]"
            placeholder="Start a post"
            disabled
          />
        </div>
        <div className="flex justify-between items-center gap-4 p-2">
          <div className="flex rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
            <img
              src={photoImg}
              alt="profile-image"
              className="cursor-pointer w-[20px] h-[20px]"
            />
            <p className="text-md text-slate-800">Photos</p>
          </div>
          <div className="flex rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
            <img
              src={videoImg}
              alt="profile-image"
              className="cursor-pointer w-[20px] h-[20px]"
            />
            <p className="text-md text-slate-800">video</p>
          </div>
          <div className="flex rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
            <img
              src={audioImg}
              alt="profile-image"
              className="cursor-pointer w-[20px] h-[20px]"
            />
            <p className="text-md text-slate-800">audio</p>
          </div>
          <div className="flex rounded-[10px] cursor-pointer justify-between p-3 items-center hover:bg-gray-200">
            <img
              src={contentImg}
              alt="profile-image"
              className="cursor-pointer w-[20px] h-[20px]"
            />
            <p className="text-md text-slate-800">create content</p>
          </div>
        </div>
      </div>
      <div className="post-content bg-white shadow-sm rounded-lg shadow-gray-300 w-full"></div>
    </div>
  );
};
