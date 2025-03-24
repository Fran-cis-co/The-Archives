import React from "react";

import ActivityHomePageCards from "./components/ActivityHomePageCards";
/// import data
import { dungeons } from "../../data/Dungeons";
import { raids } from "../../data/Raids";
import { useParams } from "react-router";

// Home page component which will display the cards of either raids or dungeons depending on what the user picked

/* 
  TO-DO:
    Create card page for the raids and dungeons
*/
const ActivityHomePage = () => {
  // Grab the activity the user chose from the parameter based on what they clicked
  const { activityName } = useParams();

  return (
    <div className="container">
      {/* Send data depending on what the user picked (raid or dungeon) */}
      {activityName === "Dungeons" ? (
        <ActivityHomePageCards activity={dungeons} activityType={"Dungeons"} />
      ) : (
        <ActivityHomePageCards activity={raids} activityType={"Raids"} />
      )}
    </div>
  );
};

export default ActivityHomePage;
