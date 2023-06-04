import { AiFillProject } from "react-icons/ai";
import { BsMicrosoftTeams } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { SiProgress } from "react-icons/si";

export const dashboardNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: <RxDashboard color="purple" size={25} />,
    to: "",
    titleClassName: "text-lg font-semibold leading-5 text-slate-800",
    containerClassName:
      "cursor-pointer flex items-center gap-x-3 px-6 py-2 rounded-3xl",
  },
  {
    id: 2,
    title: "Projects",
    icon: <AiFillProject color="purple" size={25} />,
    to: "",
    titleClassName: "text-lg font-semibold leading-5 text-slate-800",
    containerClassName:
      "cursor-pointer flex items-center gap-x-3 px-6 py-2 rounded-3xl",
  },
  {
    id: 3,
    title: "Progress",
    icon: <SiProgress color="purple" size={25} />,
    to: "",
    titleClassName: "text-lg font-semibold leading-5 text-slate-800",
    containerClassName:
      "cursor-pointer flex items-center gap-x-3 px-6 py-2 rounded-3xl",
  },
  {
    id: 4,
    title: "Teams",
    icon: <BsMicrosoftTeams color="purple" size={25} />,
    to: "",
    titleClassName: "text-lg font-semibold leading-5 text-slate-800",
    containerClassName:
      "cursor-pointer flex items-center gap-x-3 px-6 py-2 rounded-3xl",
  },
];

export const projectList = [
  {
    icon: "",
    title: "Colab Workspace",
    key: "COL",
    type: "Team-managed software",
    lead: "kebede demelash",
  },
  {
    icon: "",
    title: "COLABS Work",
    key: "BCUP",
    type: "Team-managed software",
    lead: "dawit demelash",
  },
  {
    icon: "",
    title: "Another Project",
    key: "BCBP",
    type: "Team-managed software",
    lead: "dagim demelash",
  },
  {
    icon: "",
    title: "Project 1",
    key: "BCBP",
    type: "Team-managed software",
    lead: "mekdes demelash",
  },
  {
    icon: "",
    title: "Project 2",
    key: "BCBP",
    type: "Team-managed software",
    lead: "dagim demelash",
  },
];
