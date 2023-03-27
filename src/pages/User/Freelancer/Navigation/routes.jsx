import { lazy, Suspense } from "react";
import WorkspaceDashboard from "../Workspace/WorkspaceDashboard";

const FreelancerHomePage = lazy(() => import("../Home/FreelancerHomePage"));
const MessagingPage = lazy(() => import("../Messaging/MessagingPage"));
const JobPage = lazy(() => import("../Jobs/JobPage"));
const WorkspacePage = lazy(() => import("../Workspace/WorkspacePage"));
const NotificationPage = lazy(() => import("../Notification/NotificationPage"));
const ProfilePage = lazy(() => import("../Profile/ProfilePage"));

export const routes = [
	{
		path: "/", //freelancerhome
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
];