import { lazy, Suspense } from "react";
import Loading from "../components/Loader/Loading";

import ChooseSignupType from "../pages/Auth/signup/ChooseSignupType";
import ClientSignup from "../pages/Auth/signup/ClientSignup";
import LoginPage from "../pages/Auth/login/LoginPage";
import ForgotPassword from "../pages/Auth/password/ForgotPassword";
import ResetPassword from "../pages/Auth/password/ResetPassword";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import FreelancerSignup from "../pages/Auth/signup/FreelancerSignup";
// import WorkspaceDashboard from "../pages/User/Freelancer/Workspace/WorkspaceDashboard";
import ProfilePage from "../pages/User/Freelancer/Profile/ProfilePage";
// import WorkspacePage from "../pages/User/Freelancer/Workspace/WorkspacePage";
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
import CompleteProfile from "../pages/Auth/components/CompleteProfile";
import ProjectSection from "../pages/User/client/components/workspace/project/ProjectSection";
import TeamSection from "../pages/User/client/components/workspace/team/TeamSection";
import ProgressSection from "../pages/User/client/components/workspace/progress/ProgressSection";
import DashboardSection from "../pages/User/client/components/workspace/dashboard/DashboardSection";
import JobDetail from "../pages/User/Freelancer/Jobs/components/JobDetail";
import ApplyPage from "../pages/User/Freelancer/Jobs/components/ApplyPage";
import FreelancerWorkspaceDashboardSection from "../pages/User/Freelancer/Workspace/components/dashboard/FreelancerWorkspaceDashboardSection";
import FreelancerWorkspaceProjectSection from "../pages/User/Freelancer/Workspace/components/project/FreelancerWorkspaceProjectSection";
import FreelancerWorkspaceProgressSection from "../pages/User/Freelancer/Workspace/components/progress/FreelancerWorkspaceProgressSection";
import FreelancerWorkspaceTeamSection from "../pages/User/Freelancer/Workspace/components/team/FreelancerWorkspaceTeamSection";
import Editor from "../pages/User/Freelancer/Workspace/components/codeeditor/Editor";
import FreelancerWorkspaceProjectDetail from "../pages/User/Freelancer/Workspace/components/projectdetail/FreelancerWorkspaceProjectDetail";

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
    path: "/jobs/:jobId",
    element: <JobDetail />,
  },
  {
    path: "/jobs/apply/:jobId",
    element: <ApplyPage />,
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

  // {
  //   path: "/profile",
  //   element: <ProfilePage />,
  // },

  {
    path: "/signup-success",
    element: <SignupSuccess />,
  },
  {
    path: "/verification-success",
    element: <VerificationSuccess />,
  },
  {
    path: "/complete-profile",
    element: <CompleteProfile />,
  },
  {
    path: "/client",
    element: <ClientHomePage />,
  },
  {
    path: "/client/jobs/:jobId",
    element: <ClientJobDetail />,
  },
  {
    path: "/post-job",
    element: <PostJob />,
  },
  {
    path: "/job/applications/list/:jobId",
    element: <ApplicationList />,
  },
  {
    path: "/job-applications/:jobId/:applicationId",
    element: <ApplicationDetail />,
  },
  {
    path: "/client/workspace/projects",
    element: <ProjectSection />,
  },
  {
    path: "/client/workspace/teams",
    element: <TeamSection />,
  },
  {
    path: "/client/workspace/progress",
    element: <ProgressSection />,
  },
  {
    path: "/client/workspace",
    element: <DashboardSection />,
  },
  {
    path: "/workspace",
    element: <FreelancerWorkspaceDashboardSection />,
  },
  {
    path: "/workspace/projects",
    element: <FreelancerWorkspaceProjectSection />,
  },
  {
    path: "/workspace/progress",
    element: <FreelancerWorkspaceProgressSection />,
  },
  {
    path: "/workspace/teams",
    element: <FreelancerWorkspaceTeamSection />,
  },
  {
    path: "/workspace/:project-id",
    element: <FreelancerWorkspaceProjectDetail />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
];
