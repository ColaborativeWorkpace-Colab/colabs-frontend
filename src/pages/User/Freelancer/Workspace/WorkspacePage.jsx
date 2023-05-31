import React from "react";
import FreelancerHeader from "../Header/Header";
import { useNavigate } from "react-router-dom";
import EmptyProjectPage from "./components/EmptyProjectPage";
import ProjectListTable from "./components/ProjectListTable";
const WorkspacePage = () => {
	const width = window.innerWidth;
	const navigate = useNavigate();
	const projects = [1, 2];

	return (
		<>
			<FreelancerHeader selectedNav={5} />
			<div className="w-full h-full mt-[50px] px-12 py-8">
				<div className="workspace-header flex justify-between">
					<h1 className="text-2xl">Projects</h1>
					<button
						onClick={() => navigate("/projectdashborad")}
						className="bg-purple-500 rounded-md p-2 text-white"
					>
						Create project
					</button>
				</div>
				<div className="mt-4 flex justify-around utems-center md:justify-start gap-2 md:gap-8">
					<form className="">
						<div className="relative">
							<input
								type="text"
								id="default-search"
								className="block w-[250px] p-2  md:pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
								placeholder="Search projects"
							/>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2">
								<span className="cursor-pointer">
									<svg
										aria-hidden="true"
										className="ml-3 w-5 h-5 text-gray-500 dark:text-gray-400"
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
								</span>
							</div>
						</div>
					</form>

					<button
						id="dropdownDefaultButton"
						data-dropdown-toggle="dropdown"
						className="text-white bg-purple-400 hover:bg-purple-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
						type="button"
					>
						All
					</button>
				</div>

				{projects.length > 0 ? <ProjectListTable /> : <EmptyProjectPage />}
			</div>
		</>
	);
};

export default WorkspacePage;
