import React from "react";
import sampleImg from "../../../../../assets/images/account.png";
import starImg from "../../../../../assets/images/star.png";
import locationImg from "../../../../../assets/images/location.png";
import enterpriseImg from "../../../../../assets/images/enterprise.png";
import verifiedImg from "../../../../../assets/images/verify.png";
import bookmarkImg from "../../../../../assets/images/bookmark.png";
function JoblistComponent() {
	let jobs = [1, 2, 3, 4, 5, 6];
	return (
		<div className="grow flex flex-col gap-6">
			<div className="bg-white flex justify-center items-center p-5">
				<form className="flex items-center w-full">
					<label for="voice-search" className="sr-only">
						Search
					</label>
					<div className="relative w-full">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								aria-hidden="true"
								className="w-5 h-5 text-gray-500 dark:text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
						<input
							type="text"
							id="voice-search"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
							placeholder="Search Jobs..."
							required
						/>
						<button
							type="button"
							className="absolute inset-y-0 right-0 flex items-center pr-3"
						>
							<svg
								aria-hidden="true"
								className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
					</div>
					<button
						type="submit"
						className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-purple-700 rounded-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
					>
						<svg
							aria-hidden="true"
							className="w-5 h-5 mr-2 -ml-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
						Search
					</button>
				</form>
			</div>
			<div className="bg-white h-full flex flex-col px-6 py-6 gap-6">
				{jobs.map((value, key) => (
					<div className="cursor-pointer job-content flex flex-col gap-3 w-full border-2 border-gray-100 p-5 rounded-lg">
						<div className="grow flex gap-4">
							<div className="company-logo">
								<img
									src={enterpriseImg}
									width={"50px"}
									height={"50px"}
									alt="image here"
								/>
							</div>
							<div className="grow flex justify-between">
								<div className="">
									<div className="flex items-center gap-2">
										<h1 className="text-xl font-bold">
											Create Figma Design For Web Application
										</h1>
										<p className="text-sm text-slate-500">-</p>
										<p className="text-sm text-slate-500"> 2 Hours ago</p>
									</div>
									<div className="flex">
										<p className="text-md text-slate-500">
											Hourly: 100 ETB - 200 ETB - Remote Friendly - Est. Time: 1
											to 3 months
										</p>
									</div>
								</div>
								<div
									className="z-99 book-mark-job"
									onClick={() => {
										console.log("bokk marked");
									}}
								>
									<img
										src={bookmarkImg}
										width={"30px"}
										height={"30px"}
										alt="bookmark"
									/>
								</div>
							</div>
						</div>
						<div className="job-desrcription">
							<h1 className="text-md text-slate-800 pr-[110px]">
								Looking for UI/UX designers that are responsible for the design
								and implementation of all the experiences a user has when
								interacting with a digital tool, such as a website. experiences
								a user has when interacting with a digital tool, such as a
								website.
							</h1>
						</div>

						<div className="job-tasks flex gap-2 items-center">
							<p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-2 text-sm">
								User Interface Design
							</p>
							<p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-2 text-sm">
								Figma
							</p>
							<p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-2 text-sm">
								Html
							</p>
							<p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-2 text-sm">
								In Design
							</p>
							<p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-2 text-sm">
								Adobe XD
							</p>
							<p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-2 text-sm">
								Illustrator
							</p>
						</div>
						<div className="recruiter-status flex gap-6">
							<div className="payment-verified flex items-center gap-3">
								<img src={verifiedImg} width={"20px"} height={"20px"} alt="" />
								<span className="text-slate-500">Payment Verified</span>
							</div>
							<div className="flex gap-3">
								<span>
									<img src={starImg} width={"20px"} height={"20px"} alt="" />
								</span>
								<span>
									<img src={starImg} width={"20px"} height={"20px"} alt="" />
								</span>
								<span>
									<img src={starImg} width={"20px"} height={"20px"} alt="" />
								</span>
								<span>
									<img src={starImg} width={"20px"} height={"20px"} alt="" />
								</span>
								<span>
									<img src={starImg} width={"20px"} height={"20px"} alt="" />
								</span>
							</div>
							<div className="payment-verified flex gap-3">
								<img src={locationImg} width={"20px"} height={"20px"} alt="" />
								<span className="text-slate-500">Addis Ababa, Ethiopia</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default JoblistComponent;
