import React from "react";
// --- Sections of the homepage are seperated into different components for cleaner code --- //
import HomePageCards from "./components/HomePageCards";
import HomePageIntro from "./components/HomePageIntro";
import HomePageDisclaimer from "./components/HomePageDisclaimer";
// Import data which will be used as a provided hyperlink
import { homepageListing } from "../../data/HomePageListing";

/*
  TO-DO:
    - Work on Dungeon homepage
*/

const HomePage = () => {
  return (
    // Use Grid style layout for easy design
    <div className="container p-2">
      <HomePageIntro />
      <HomePageCards listing={homepageListing} />
      <HomePageDisclaimer />
    </div>
  );
};

export default HomePage;
