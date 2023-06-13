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
import ClientHomePage from "../pages/User/client/home/HomePage";
import LandingHomePage from "../pages/landingPage/LandingHomePage";
import SignupSuccess from "../pages/Auth/components/SignupSuccess";
import VerificationSuccess from "../pages/Auth/components/AccountVerificationSuccess";
import ClientJobDetail from "../pages/User/client/components/job/JobDetail";
import ApplicationList from "../pages/User/client/components/job/ApplicationList";
import ApplicationDetail from "../pages/User/client/components/job/ApplicationDetail";
import PostJob from "../pages/User/client/components/job/PostJob";

export const routes = [
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
  {
    path: "/freelancer", //freelancerhome
    element: <FreelancerHomePage />,
  },
  {
    path: "/jobs",
    element: <JobPage />,
  },
  {
    path: "/profile",
    // element: <div></div>,
    element: <ProfilePage />,
  },
  {
    path: "/messaging",
    // element: <div></div>,
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
  // {
  //   path: "/profile",
  //   element: <ProfilePage />,
  // },
  {
    path: "/projectdashborad",
    element: <WorkspaceDashboard />,
  },
  {
    path: "/signup-success",
    element: <SignupSuccess />,
  },
  {
    path: "/verification-success",
    element: <VerificationSuccess />,
  },
  {
    path: "/client",
    element: <ClientHomePage />,
  },
  {
    path: "/posted-job-detail",
    element: <ClientJobDetail />,
  },
  {
    path: "/post-job",
    element: <PostJob />,
  },
  {
    path: "/job-applications",
    element: <ApplicationList />,
  },
  {
    path: "/job-applications/:job-application-id/:user-id",
    element: <ApplicationDetail />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
