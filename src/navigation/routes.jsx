import { lazy, Suspense } from "react";
import Loading from "../components/Loder/Loding";

import ChooseSignupType from "../pages/Auth/signup/ChooseSignupType";

import ClientSignup from "../pages/Auth/signup/ClientSignup";
import LoginPage from "../pages/Auth/login/LoginPage";
import ForgotPassword from "../pages/Auth/password/ForgotPassword";

import ResetPassword from "../pages/Auth/password/ResetPassword";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import FreelancerSignup from "../pages/Auth/signup/FreelancerSignup";
const LandingHomePage = lazy(() =>
	import("../pages/landingPage/LandingHomePage"),
);
export const routes = [
	{
		path: "*",
		element: <NotFoundPage />,
	},
	{
		path: "/",
		element: (
			<Suspense fallback={<Loading />}>
				<LandingHomePage />
			</Suspense>
		),
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/signup",
		element: <ChooseSignupType />,
	},
	{
		path: "/signup/client",
		element: <ClientSignup />,
	},
	{
		path: "/signup/freelancer",
		element: <FreelancerSignup />,
	},
	{
		path: "/forgotpassword",
		element: <ForgotPassword />,
	},
	{
		path: "/resetpassword",
		element: <ResetPassword />,
	},
];
