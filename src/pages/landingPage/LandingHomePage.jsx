import React from "react";
import Footer from "../../components/Footer/Footer";
import Activity from "./Activity";
import Banner from "./Banner";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Header from "./Header/Header";
import Hero from "./Hero";

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
