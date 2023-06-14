import React from "react";
// import "./style.css";
import profileImg from "../../../../../assets/images/profile.jpg";
import photoImg from "../../../../../assets/images/photo.png";
import videoImg from "../../../../../assets/images/video.png";
import audioImg from "../../../../../assets/images/audio.png";
import contentImg from "../../../../../assets/images/blog.png";
import pythonImg from "../../../../../assets/images/python.svg.png";
export const RightSide = () => {
	let rights = [1,2,3,4,5,6];
	return (
		<div className="right-side hidden lg:block h-screen flex flex-col lg:w-[300px] bg-white shadow-sm rounded-lg shadow-gray-300">
			<h1 className='font-bold text-gray-800 pl-10 pt-6'>Add to Your Feed </h1> 

		{rights.map(right => (
          <div className="py-8 px-8 h-auto pb-3 my-[5px] mx-auto bg-white rounded-xl shadow-lg space-y-0 sm:py-1 sm:flex sm:items-center  sm:space-y-0 sm:space-x-1">
		  <img className='block mx-auto w-10  h-auto rounded-full sm:mx-0 sm:shrink-0' src={pythonImg} alt="Avatar" />
		  <div>
			  <h1 className='font-bold text-gray-800 pl-3'>Python</h1>
			  <p>Company-Computer Software</p>
			  <button className="cursor-pointer text-purple-900 font-bold">
								  <span>+</span> Follow
							  </button>
		
		  </div> 
		  
	  
		</div>
        ))
		}


		
	 
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
