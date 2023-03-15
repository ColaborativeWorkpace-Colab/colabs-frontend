import React, { useEffect, useState } from "react";
import AuthHeader from "../AuthHeader";
import clientImg from "../../../assets/images/client.png";
import freelancerImg from "../../../assets/images/freelancer.png";
const ChooseSignupType = () => {
	const [btnText, setBtnText] = useState("");
	const [selected, setSelected] = useState(0);
	return (
		<div className="w-full h-screen">
			<AuthHeader />

			<div className="w-[400px] sm:w-[650px] md:w-3/4 lg:w-3/4 xl:w-1/2 sm:h-[450px] relative top-[100px] flex flex-col justify-center items-center gap-5 mx-auto p-4 sm:p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<div>
					<h1 className="sm:text-4xl text-3xl">
						Join as a client or freelancer?
					</h1>
				</div>
				<div className="flex gap-3 sm:gap-10 justify-center items-center">
					<div
						onClick={() => setSelected(1)}
						className={
							selected == 1
								? "pointer relative flex flex-col items-center justify-center p-4 w-[180px] h-[200px] sm:w-[250px] bg-white border border-purple-500 rounded-lg shadow dark:bg-purple-500 dark:border-purple-500 hover:border-3 hover:border-purple-500 hover:pointer"
								: "pointer relative flex flex-col items-center justify-center p-4 w-[180px] h-[200px] sm:w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-3 hover:border-purple-500 hover:pointer"
						}
					>
						<img src={clientImg} alt="" className="w-[40px] h-[40px] mb-2" />
						<input
							id="helper-radio-1"
							name="helper-radio"
							type="radio"
							value=""
							onChange={(e) => setBtnText("client")}
							className="absolute top-[10px] right-[10px] w-4 h-4 text-purple-500 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
						/>
						<label htmlFor="helper-radio-1" className="text-2xl text-center">
							I’m a client, hiring for a project
						</label>
					</div>

					<div
						onClick={() => setSelected(2)}
						className={
							selected == 2
								? "pointer relative flex flex-col items-center justify-center p-4 w-[180px] h-[200px] sm:w-[250px] bg-white border border-purple-500 rounded-lg shadow dark:bg-purple-500 dark:border-purple-500 hover:border-3 hover:border-purple-500 hover:pointer"
								: "pointer relative flex flex-col items-center justify-center p-4 w-[180px] h-[200px] sm:w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-3 hover:border-purple-500 hover:pointer"
						}
					>
						<img
							src={freelancerImg}
							alt=""
							className="w-[40px] h-[40px] mb-2"
						/>
						<input
							id="helper-radio-2"
							name="helper-radio"
							type="radio"
							value=""
							onChange={(e) => setBtnText("freelancer")}
							className="absolute top-[10px] right-[10px] w-4 h-4 text-purple-500 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
						/>
						<label htmlFor="helper-radio-2" className="text-2xl text-center">
							I’m a freelancer, looking for work
						</label>
					</div>
				</div>
				<div className="mt-8">
					{btnText == "" ? (
						<button
							type="button"
							className="w-[300px] focus:outline-none text-white bg-purple-200 font-medium rounded-2xl text-sm px-5 py-2.5 mb-2"
						>
							{"Create Account"}
						</button>
					) : (
						<button
							type="button"
							className="w-[300px] focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4  font-medium rounded-2xl text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
						>
							{btnText == "client"
								? "Join as a client"
								: "Join as a freelancer"}
						</button>
					)}
				</div>
				<div>
					<p className="">
						Already have an account?
						<a className="ml-2 text-bold text-purple-900" href="">
							Log In
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ChooseSignupType;
