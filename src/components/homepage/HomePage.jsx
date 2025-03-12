import React from "react";
// --- Sections of the homepage are seperated into different components for cleaner code --- //
import HomePageCards from "./components/HomePageCards";
import HomePageIntro from "./components/HomePageIntro";
import HomePageDisclaimer from "./components/HomePageDisclaimer";

/*
  TO-DO:
    - Work on Dungeon homepage
*/

const HomePage = () => {
  return (
    // Use Grid style layout for easy design
    <div className="container text-center p-2">
      <HomePageIntro />
      <HomePageCards />
      <HomePageDisclaimer />
    </div>
  );
};

export default HomePage;
