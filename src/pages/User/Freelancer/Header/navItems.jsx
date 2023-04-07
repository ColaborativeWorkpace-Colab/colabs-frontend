import home from "../../../../assets/images/home.png";
import job from "../../../../assets/images/job.png";
import notification from "../../../../assets/images/notification.png";
import message from "../../../../assets/images/message.png";
import user from "../../../../assets/images/account.png";
import workspace from "../../../../assets/images/workspace.png";

export const navLinks = [
	{
		id: 1,
		name: "Home",
		icon: home,
		to: "/freelancerhome",
		className:
			"text-slate-700 hover:text-slate-900 px-3 rounded-md text-sm font-medium",
	},
	{
		id: 2,
		name: "Job",
		icon: job,
		to: "/jobs",
		className:
			"text-slate-700 hover:text-slate-900 px-3 rounded-md text-sm font-medium",
	},
	{
		id: 3,
		name: "Message",
		icon: message,
		to: "/messaging",
		className:
			"text-slate-700 hover:text-slate-900 px-3 rounded-md text-sm font-medium",
	},

	{
		id: 4,
		name: "Notification",
		icon: notification,
		to: "/notification",
		className:
			"text-slate-700 hover:text-slate-900 px-3 rounded-md text-sm font-medium",
	},
	{
		id: 5,
		name: "Workspace",
		icon: workspace,
		to: "/workspace",
		className:
			"text-slate-700 hover:text-slate-900 px-3 rounded-md text-sm font-medium",
	},
	{
		id: 6,
		name: "Profile",
		icon: user,
		to: "/profile",
		className:
			"text-slate-700 hover:text-slate-900 px-3 rounded-md text-sm font-medium",
	},
];
