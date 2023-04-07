import React from "react";
import "./style.css";
import sampleImg from "../../../../assets/images/account.png";
import closeImg from "../../../../assets/images/close.png";
import { useNavigate } from "react-router-dom";
const WorkspaceDashboard = () => {
	const navigate = useNavigate();
	return (
		<div className="bg-purple-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-purple-600 selection:text-white">
			<div className="flex flex-col relative w-screen">
				<div
					id="menu"
					className="bg-gray-100 min-h-screen z-10 text-slate-300 w-[350px] fixed left-0 top-0 h-screen overflow-y-scroll"
				>
					<div className="fixed w-[335px] top-0 bg-gray-50 p-2">
						<span onClick={() => navigate("/workspace")}>
							<img
								src={closeImg}
								alt="close"
								className=" cursor-pointer w-[40px] h-[40px]"
							/>
						</span>
					</div>
					<div id="logo" className="mt-[70px] mb-4 px-6">
						<h1 className="text-lg md:text-2xl font-bold text-slate-900">
							COLABS<span className="text-purple-500"></span>.
						</h1>
						<p className="text-slate-800 text-sm">
							Manage your Projects and Team
						</p>
					</div>
					<div id="profile" className="px-6 py-5">
						<p className="text-slate-800 mb-3">Welcome back,</p>
						<a href="#" className="inline-flex space-x-2 items-center">
							<span>
								<img className="rounded-full w-8 h-8" src={sampleImg} alt="" />
							</span>
							<span className="text-slate-800 text-md md:text-base font-bold">
								Kalkidan Getahun
							</span>
						</a>
					</div>
					<div id="nav" className="w-full px-6">
						<a
							href="#"
							className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-gray-200 transition ease-linear duration-150"
						>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 h-6 text-slate-900"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
									/>
								</svg>
							</div>
							<div className="flex flex-col">
								<span className="text-lg font-bold leading-5 text-slate-800">
									Dashboard
								</span>
								<span className="text-sm text-slate-800 hidden md:block">
									Dashboard Overview
								</span>
							</div>
						</a>

						<a
							href="#"
							className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-gray-200 transition ease-linear duration-150"
						>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 h-6 text-slate-900"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
									/>
								</svg>
							</div>
							<div className="flex flex-col">
								<span className="text-lg text-slate-800 font-bold leading-5">
									Software Development
								</span>
								<span className="text-sm text-slate-800 hidden md:block">
									Plan, track and release great software.
								</span>
							</div>
						</a>

						<a
							href="#"
							className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-gray-200 transition ease-linear duration-150"
						>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 h-6 text-slate-900"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
									/>
								</svg>
							</div>
							<div className="flex flex-col">
								<span className="text-lg text-slate-800 font-bold leading-5">
									Work Management
								</span>
								<span className="text-sm text-slate-800 hidden md:block">
									Track, coordinate, and manage work with structure and
									consistency..
								</span>
							</div>
						</a>
						<a
							href="#"
							className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-gray-200 transition ease-linear duration-150"
						>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 h-6 text-slate-900"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
									/>
								</svg>
							</div>
							<div className="flex flex-col">
								<span className="text-lg text-slate-800 font-bold leading-5">
									Software Development
								</span>
								<span className="text-sm text-slate-800 hidden md:block">
									Manage Software Developmwnt{" "}
								</span>
							</div>
						</a>
						<a
							href="#"
							className="w-full px-2 inline-flex space-x-2 items-center py-3 hover:bg-gray-200 transition ease-linear duration-150"
						>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 h-6 text-slate-900"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
									/>
								</svg>
							</div>
							<div className="flex flex-col">
								<span className="text-lg text-slate-800 font-bold leading-5">
									Settings
								</span>
								<span className="text-sm text-slate-800 hidden md:block">
									Set and manage your account.
								</span>
							</div>
						</a>
						<div className="h-[50px]"></div>
					</div>
				</div>

				{/* TODO dashboard body part */}

				<div className="absolute left-[390px] top-0">
					<div className="font-bold text-slate-900 text-2xl">
						Dashboard Overview
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkspaceDashboard;
