import React from "react";
import "./style.css";
import profileImg from "../../../../../assets/images/profile.jpg";
import photoImg from "../../../../../assets/images/photo.png";
import videoImg from "../../../../../assets/images/video.png";
import audioImg from "../../../../../assets/images/audio.png";
import contentImg from "../../../../../assets/images/blog.png";
import pythonImg from "../../../../../assets/images/python.svg.png";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";
import microsoftImg from "../../../../../assets/images/microsoft.png"
import googleImg from "../../../../../assets/images/google.png"
import openAiImg from "../../../../../assets/images/openai.svg"
import addisSoftwareImg from "../../../../../assets/images/addisSoftware.jpeg"
import chapaImg from "../../../../../assets/images/chapa.jpg"
import icoglabsImg from "../../../../../assets/images/icoglabs.jpeg"

export const RightSide = () => {
	let rights = [1,2,3,4,5,6];
	const datas = [ 
		{
			id:1,
			name: 'Addis Software',
			description: 'Software Products and Services',
			imgUrl: addisSoftwareImg
		},
		{
			id:2,
			name: 'Chapa',
			description: 'FinTech and Software Products',
			imgUrl: chapaImg
		},
		{
			id:3,
			name: 'iCog-Labs',
			description: 'AI Research and Community Service',
			imgUrl: icoglabsImg
		},
		{
			id:4,
			name: 'microsoft',
			description: 'Software Products and Services',
			imgUrl: microsoftImg
		},
		{
			id:5,
			name: 'Google',
			description: 'Software as a Service and Products',
			imgUrl: googleImg
		},
		{
			id:6,
			name: 'OpenAI',
			description: 'AI Research',
			imgUrl: openAiImg
		}
	]
	return (
		
		<div className="right-side hidden lg:block h-screen flex flex-col lg:w-[300px] bg-white shadow-sm rounded-lg shadow-gray-300">
			<h1 className='font-bold text-gray-800 pl-10 pt-6'>Add to Your Feed </h1> 

		{datas.map(data => (
          <div key={data.id} className="py-8 px-8 h-auto pb-3 my-[5px] mx-auto bg-white rounded-xl shadow-lg space-y-0 sm:py-1 sm:flex sm:items-center  sm:space-y-0 sm:space-x-1">
		  <img className='block mx-auto w-10  h-auto rounded-full cursor-pointer sm:mx-0 sm:shrink-0' src={data.imgUrl} alt="Avatar" />
		  <div>
			  <h1 className='font-bold text-gray-800 pl-3 hover:underline cursor-pointer capitalize'>{data.name}</h1>
			  <p className="hover:underline cursor-pointer">{data.description}</p>
			  <FollowButton />
			 
		  </div> 
		  
	  
		</div>

		
        ))
		}


		
	 
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
    <div className="left-side h-full">
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
        <div className="w-full">
          <div className="pb-2 rounde-md flex flex-col justify-center bg-slate-200 w-full">
            <div className="flex gap-2 items-center">
              <span className="text-slate-900 h-[20px]"></span>
            </div>
          </div>
        </div>
        <div className="">
          <p className="my-3 pb-1 w-full border-b-2 border-gray-400 text-xl">
            My Skills
          </p>
          <div className="w-full flex flex-wrap  shrink gap-3">
            {skills.map((skill, id) => (
              <button className="border-[1px] border-purple-600 px-2 py-1 rounded-lg text-slate-800 text-sm">
                {skill.skill}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full">
          <p className="mt-4 pb-1 w-full border-b-2 border-gray-400 text-xl">
            Job success
          </p>
          <div className="my-3 p-2 rounde-md flex flex-col justify-center bg-slate-200 w-full">
            <div className="flex gap-2 items-center">
              <span className="bg-green-500 w-3/4 h-[5px] "></span>{" "}
              <span className="text-slate-900">100%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
