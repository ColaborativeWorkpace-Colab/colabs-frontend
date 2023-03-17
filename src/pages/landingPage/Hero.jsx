import React from "react";
import HeroImage from "../../assets/images/hero-image.png";
const Hero = () => {
	return (
		<div className="md:flex md:justify-between md:p-4 lg:p-6">
			<div className="p-3 md:p-0 md:flex-col md:w-1/2">
				<div className="md:my-5">
					<h1 className="text-4xl md:text-5xl font-bold tracking-normal">
						Are you looking for top 5% Freelancers?
					</h1>
				</div>
				<div className="my-7">
					<p className="text-gray-800 text-2xl">
						Hire, greate freelancers , fast, colabs helps You hire elite
						freelancers at a moment's noticed.
					</p>
				</div>
				<div className="block md:flex justify-center items-center md:items-start md:py-10">
					<div className="mb-4 md:mb-0">
						<button
							type="button"
							className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
						>
							Hire a Freelancer
						</button>
					</div>
					<div>
						<form>
							<div className="flex">
								<label
									htmlFor="search-dropdown"
									className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
								>
									Seach Text
								</label>
								<button
									id="dropdown-button"
									data-dropdown-toggle="dropdown"
									className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
									type="button"
								>
									Jobs
									<svg
										aria-hidden="true"
										className="w-4 h-4 ml-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								</button>
								<div
									id="dropdown"
									className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
								>
									<ul
										className="py-2 text-sm text-gray-700 dark:text-gray-200"
										aria-labelledby="dropdown-button"
									>
										<li>
											<button
												type="button"
												className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Freelancers
											</button>
										</li>
										<li>
											<button
												type="button"
												className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Jobs
											</button>
										</li>
										<li>
											<button
												type="button"
												className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Projects
											</button>
										</li>
									</ul>
								</div>
								<div className="relative w-full">
									<input
										type="search"
										id="search-dropdown"
										className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-purple-700 focus:border-purple-700 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-purple-700"
										placeholder="Search Freelancers, Jobs, Projects..."
										required
									/>
									<button
										type="submit"
										className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-purple-700 rounded-r-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
									>
										<svg
											aria-hidden="true"
											className="w-5 h-5"
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
										<span className="sr-only">Search</span>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="hidden sm:hidden md:flex md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[450px]">
				<img src={HeroImage} alt="" />
			</div>
		</div>
	);
};

export default Hero;
