import React from "react";
import Footer from "../../components/Footer/Footer";
import Activity from "./components/Activity";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Header from "./Header/Header";
import Hero from "./components/Hero";

const LandingHomePage = () => {
	return (
		<>
			<Header />
			<div className="sm:container relative top-[100px]">
				<Hero />
				<Activity />
				<div className="m-10"></div>
				<Carousel />
				<div className="m-10"></div>
				<Banner />
				<div className="m-10"></div>
				<Contact />
				<div className="m-10"></div>
			</div>
			<Footer />
		</>
	);
};

export default LandingHomePage;
