import React from "react";

import DungeonHomePage from "./DungeonHomePage";
import { dungeons } from "../../data/Dungeons";
import { useParams } from "react-router";

/* 
  TO-DO:
    Create card page for the raids and dungeons
*/
const DungeonAndRaidHomePage = () => {
  // Grab the activity the user chose from the parameter based on what they clicked
  const { activityName } = useParams();

  return (
    <>{activityName === "Dungeons" ? <DungeonHomePage /> : <p>Raids</p>}</>
  );
};

export default DungeonAndRaidHomePage;
