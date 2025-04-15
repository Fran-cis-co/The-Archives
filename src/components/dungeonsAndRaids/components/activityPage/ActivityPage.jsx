import React from "react";
import { useParams } from "react-router";
// import data
import { dungeons } from "../../../../data/Dungeons";
import { raids } from "../../../../data/Raids";
// import components
import ActivityPageIntroSection from "./components/ActivityPageIntroSection";
import ActivityPageVideoTutorialSection from "./components/ActivityPageVideoTutorialSection";
import ActivityEncounterMaps from "./components/ActivityEncounterMaps";
import ActivityPageSecretChestsVideo from "./components/ActivityPageSecretChestsVideo";
import ActivityRedBorderTutorial from "./components/ActivityRedBorderTutorial";
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
          <div className="col-2">
            <ActivityScrollSpy activity={activity} />
          </div>
          <div className="col-8">
            <div>
              {/* Intro section */}
              <ActivityPageIntroSection
                name={activity.name}
                desc={activity.desc}
              />

              {/* Video tutorial section */}
              <div id="youtube">
                <h2>Youtube Guides</h2>
                <p>
                  Youtube videos on how to do the activity along with any exotic
                  related quests
                </p>
                <ActivityPageVideoTutorialSection
                  videoTut={activity.tutorial}
                />
              </div>

              {/* Encounter maps section */}

              {/* Show maps if the dungeon or map is complex where maps are needed */}
              {activity.encounterMaps.length > 0 && (
                <ActivityEncounterMaps
                  maps={activity.encounterMaps}
                  credit={activity.encounterMapCredit}
                />
              )}

              {/* Checks if the activity has secret chests and if so, display the videos */}
              {activity.secretChests && (
                <ActivityPageSecretChestsVideo video={activity.secretChests} />
              )}

              {/* If the activity has a red border chest, then display the video or image of how to obtain it */}
              {activity.redBorder && (
                <ActivityRedBorderTutorial video={activity.redBorder} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityPage;
