import React from "react";
// import "./style.css";
import profileImg from "../../../../../assets/images/profile.jpg";
import photoImg from "../../../../../assets/images/photo.png";
import videoImg from "../../../../../assets/images/video.png";
import audioImg from "../../../../../assets/images/audio.png";
import contentImg from "../../../../../assets/images/blog.png";
export const RightSide = () => {
	return (
		<div className="right-side hidden lg:block h-screen flex flex-col lg:w-[300px] bg-white shadow-sm rounded-lg shadow-gray-300">
			Right Side
		</div>
	);
};
export const LeftSide = () => {
	return (
		<div className="left-side hidden md:block h-screen flex flex-col md:w-[300px] bg-white shadow-sm rounded-lg shadow-gray-300">
			<div className="profile p-5 flex flex-col justify-center">
				<div className="profile-image mb-3 flex justify-center">
					<img
						src={profileImg}
						alt="profile-image"
						className="cursor-pointer w-[100px] rounded-[50px] h-[100px] border-2 border-slate-300 p-0.5"
					/>
				</div>
				<div className="cursor-pointer text-center border-b-2 border-b-slate-400 w-full pb-3">
					<h1 className="text-xl text-slate-900">Kalkidan Getahun</h1>
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
