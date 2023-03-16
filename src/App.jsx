import Navigation from "./navigation/Navigation";

import { Suspense } from "react";
import Loading from "./components/Loder/Loding";
export default function App() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<Navigation />
			</Suspense>
		</>
	);
}
