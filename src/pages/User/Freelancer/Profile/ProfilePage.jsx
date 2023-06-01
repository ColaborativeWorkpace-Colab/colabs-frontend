import React from "react";
import FreelancerHeader from "../Header/Header";
import Svt from "../Svt/Svt";

const ProfilePage = () => {
  return (
    <>
      <FreelancerHeader selectedNav={6} />
      <div className="w-full h-full mt-[50px] px-12 py-8">Profile Page</div>;
      <Svt />
    </>
  );
};

export default ProfilePage;
