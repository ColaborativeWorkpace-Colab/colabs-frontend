import { lazy } from "react";

const ChooseSignupType = lazy(() =>
	import("../pages/Auth/signup/ChooseSignupType"),
);
const ClientSignup = lazy(() => import("../pages/Auth/signup/ClientSignup"));
const LoginPage = lazy(() => import("../pages/Auth/login/LoginPage"));
const ForgotPassword = lazy(() =>
	import("../pages/Auth/password/ForgotPassword"),
);
const ResetPassword = lazy(() =>
	import("../pages/Auth/password/ResetPassword"),
);
const NotFoundPage = lazy(() => import("../pages/NotFound/NotFoundPage"));
const FreelancerSignup = lazy(() =>
	import("../pages/Auth/signup/FreelancerSignup"),
);
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
		element: <LandingHomePage />,
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
