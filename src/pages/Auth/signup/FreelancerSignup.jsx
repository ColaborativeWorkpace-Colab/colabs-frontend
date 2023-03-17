import React from "react";
import { Link } from "react-router-dom";
import AuthFooter from "../AuthFooter";
import AuthHeader from "../AuthHeader";

const FreelancerSignup = () => {
	return (
		<>
			<AuthHeader
				text={"Here to hire talent?"}
				to="/signup/client"
				actionName={"Join as a Client"}
			/>
			<section className="mb-[150px] mt-[50px] sm:mt-[50px] md:mt-[170px] lg:mt-[170px] xl:mt-[180px]">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Sign up to find work you love
							</h1>
							<form className="space-y-4 md:space-y-6" action="#">
								<button
									aria-label="Continue with google"
									role="button"
									className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
								>
									<img
										src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
										alt="google"
									/>
									<p className="text-base font-medium ml-4 text-gray-700">
										Continue with Google
									</p>
								</button>
								<button
									aria-label="Continue with github"
									role="button"
									className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
								>
									<img
										src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg"
										alt="github"
									/>
									<p className="text-base font-medium ml-4 text-gray-700">
										Continue with Github
									</p>
								</button>

								<div className="w-full flex items-center justify-between py-5">
									<hr className="w-full bg-gray-400" />
									<p className="text-base font-medium leading-4 px-2.5 text-gray-400">
										OR
									</p>
									<hr className="w-full bg-gray-400  " />
								</div>
								<div className="flex gap-3 justify-between">
									<div className="grow">
										<label
											htmlFor="First Name"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											First Name
										</label>
										<input
											type="text"
											name="First Name"
											id="First Name"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="First Name"
											required=""
										/>
									</div>
									<div className="grow">
										<label
											htmlFor="Last Name"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Last Name
										</label>
										<input
											type="text"
											name="Last Name"
											id="Last Name"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Last Name"
											required=""
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="name@gmail.com"
										required=""
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required=""
									/>
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-start">
										<div className="flex items-center h-5">
											<input
												id="remember"
												aria-describedby="remember"
												type="checkbox"
												className="text-purple-600 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-600 dark:ring-offset-gray-800"
											/>
										</div>
										<div className="ml-3 text-sm">
											<label
												htmlFor="remember"
												className="text-gray-500 dark:text-gray-300"
											>
												Yes, I understand and agree to the Colabs Terms of
												Service , including the User Agreement and Privacy
												Policy .
											</label>
										</div>
									</div>
								</div>
								<button
									type="submit"
									className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
								>
									Sign Up
								</button>
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Already have an account?{" "}
									<Link
										to={"/login"}
										className="font-medium text-purple-600 hover:underline dark:text-purple-700"
									>
										Log In
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
			<div className="mt-5">
				<AuthFooter />
			</div>
		</>
	);
};

export default FreelancerSignup;
