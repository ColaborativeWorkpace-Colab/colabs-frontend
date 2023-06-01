import { lazy, Suspense } from "react";
import Loading from "../components/Loader/Loading";

import ChooseSignupType from "../pages/Auth/signup/ChooseSignupType";
import ClientSignup from "../pages/Auth/signup/ClientSignup";
import LoginPage from "../pages/Auth/login/LoginPage";
import ForgotPassword from "../pages/Auth/password/ForgotPassword";
import ResetPassword from "../pages/Auth/password/ResetPassword";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import FreelancerSignup from "../pages/Auth/signup/FreelancerSignup";
import WorkspaceDashboard from "../pages/User/Freelancer/Workspace/WorkspaceDashboard";
import ProfilePage from "../pages/User/Freelancer/Profile/ProfilePage";
import WorkspacePage from "../pages/User/Freelancer/Workspace/WorkspacePage";
import NotificationPage from "../pages/User/Freelancer/Notification/NotificationPage";
import MessagingPage from "../pages/User/Freelancer/Messaging/MessagingPage";
import JobPage from "../pages/User/Freelancer/Jobs/JobPage";
import FreelancerHomePage from "../pages/User/Freelancer/Home/FreelancerHomePage";
const LandingHomePage = lazy(() =>
  import("../pages/landingPage/LandingHomePage")
);
export const routes = [
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
  {
    path: "/freelancerhome", //freelancerhome
    element: <FreelancerHomePage />,
  },
  {
    path: "/jobs",
    element: <JobPage />,
  },
  {
    path: "/messaging",
    element: <MessagingPage />,
  },
  {
    path: "/notification",
    element: <NotificationPage />,
  },
  {
    path: "/workspace",
    element: <WorkspacePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/projectdashborad",
    element: <WorkspaceDashboard />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
