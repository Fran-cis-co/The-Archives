import React from "react";

// Segement page into different components
import DungeonHomePageHeader from "./components/DungeonHomePageHeader";
import DungeonHomePageCards from "./components/DungeonHomePageCards";

const DungeonHomePage = () => {
  return (
    <>
      <div className="container p-3">
        <DungeonHomePageHeader />
        <DungeonHomePageCards />
      </div>
    </>
  );
};

export default DungeonHomePage;
