import React from "react";
import Header from "./components/Header";
import DraftSection from "./components/DraftSection";
import PostingSection from "./components/PostingSection";

const ClientDashboard = () => {
  return (
    <div className="w-full">
      <Header />
      <DraftSection />
      <div className="mt-3">
        <PostingSection />
      </div>
    </div>
  );
};

export default ClientDashboard;
