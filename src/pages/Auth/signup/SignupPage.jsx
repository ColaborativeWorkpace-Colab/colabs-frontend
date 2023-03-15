import React from "react";
import AuthHeader from "../AuthHeader";
import ClientSignup from "./ClientSignup";
import FreelancerSignup from "./FreelancerSignup";

const SignupPage = () => {
	return (
		<>
			<AuthHeader />
			<FreelancerSignup />
			{/* <ClientSignup/> */}
		</>
	);
};

export default SignupPage;
