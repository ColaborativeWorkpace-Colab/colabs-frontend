import Footer from "./components/Footer/Footer";
import AdminPage from "./pages/Admin/AdminPage";
import LoginPage from "./pages/Auth/login/LoginPage";
import ForgotPassword from "./pages/Auth/password/ForgotPassword";
import ResetPassword from "./pages/Auth/password/ResetPassword";
import ChooseSignupType from "./pages/Auth/signup/ChooseSignupType";
import ClientSignup from "./pages/Auth/signup/ClientSignup";
import FreelancerSignup from "./pages/Auth/signup/FreelancerSignup";
import SignupPage from "./pages/Auth/signup/SignupPage";
import Header from "./pages/landingPage/Header";
import LandingHomePage from "./pages/landingPage/LandingHomePage";

export default function App() {
	return (
		<>
			{/* <Header /> */}
			<LandingHomePage />
			{/* <ChooseSignupType /> */}
			{/* <LoginPage /> */}
			{/* <ClientSignup /> */}
			{/* <FreelancerSignup /> */}
			{/* <SignupPage /> */}
			{/* <ForgotPassword /> */}
			{/* <ResetPassword /> */}
			<Footer />
		</>
	);
}
