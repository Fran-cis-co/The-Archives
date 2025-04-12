import React from "react";
import { useParams } from "react-router";
// import data
import { dungeons } from "../../../../data/Dungeons";
import { raids } from "../../../../data/Raids";
// import components
import ActivityPageIntroSection from "./components/ActivityPageIntroSection";
import ActivityPageVideoTutorialSection from "./components/ActivityPageVideoTutorialSection";
import ActivityEncounterMaps from "./components/ActivityEncounterMaps";
import ActivityScrollSpy from "./components/ActivityScrollSpy";

const ActivityPage = () => {
  // Grab params to display the proper information
  const { activityType, activityName } = useParams();
  // Determine which activity to display
  let activityData;
  if (activityType === "Dungeons") {
    activityData = dungeons;
  } else {
    activityData = raids;
  }

  // Find index of the picked activity from the data source
  const findActivityIndex = activityData
    .map((e) => e.name)
    .indexOf(activityName);
  // Grab activity data to display
  const activity = activityData[findActivityIndex];

  return (
    <>
      {/* Display information of activity through different components for cleaner code */}
      <div className="pt-3">
        <div className="row">
          <div className="col-2 p-5">
            <ActivityScrollSpy activity={activity} />
          </div>
          <div className="col-9">
            <div>
              {/* Intro section */}
              <ActivityPageIntroSection
                name={activity.name}
                desc={activity.desc}
              />

              {/* Video tutorial section */}
              <ActivityPageVideoTutorialSection videoTut={activity.tutorial} />

              {/* Encounter maps section */}

              {/* Show maps if the dungeon or map is complex where maps are needed */}
              {activity.encounterMaps.length > 0 && (
                <ActivityEncounterMaps
                  maps={activity.encounterMaps}
                  credit={activity.encounterMapCredit}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityPage;
