import Navigation from "./navigation/Navigation";
import FreelancerPage from "./pages/User/Freelancer/Navigation/FreelancerPage";
import "./App.css";
import ColabButton from "./utils/Button/ColabButton";
import ColabCard from "./utils/Card/ColabCard";
import { ColabLargeText, ColabMediumText } from "./utils/Typography/ColabText";
import ColabInput from "./utils/TextField/ColabInput";
import Svt from "./pages/User/Freelancer/Svt/Svt";

export default function App() {
	return (
		<>
			<Navigation />
			<Svt /> 
		</>
	);
}
