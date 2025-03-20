import React from "react";
import { useParams } from "react-router";
import { dungeons } from "../../../../data/Dungeons";

import DungeonIntroSection from "./components/DungeonIntroSection";
import DungeonVideoTutorialSection from "./components/DungeonVideoTutorialSection";
import DungeonEncounterMaps from "./components/DungeonEncounterMaps";
import DungeonScrollspy from "./components/DungeonScrollspy";

const DungeonPage = () => {
  /*
    Grab parameter name which in this case it's the picked dungeon.
    Look through imported json-like variable to find the picked dungeon and save it
    onto a variable to use in the page.
  */
  const { dungeonName } = useParams();
  const findPickedDungeon = dungeons.map((e) => e.name).indexOf(dungeonName);
  const pickedDungeon = dungeons[findPickedDungeon];

  return (
    <>
      <div className="pt-3">
        <div className="row">
          <div className="col-2 p-5">
            <DungeonScrollspy dungeon={pickedDungeon} />
          </div>
          <div className="col-9">
            <div>
              {/* Intro section */}
              <DungeonIntroSection
                name={pickedDungeon.name}
                desc={pickedDungeon.desc}
              />

              {/* Video tutorial section */}
              <DungeonVideoTutorialSection videoTut={pickedDungeon.tutorial} />

              {/* Encounter maps section */}
              <DungeonEncounterMaps
                maps={pickedDungeon.encounterMaps}
                credit={pickedDungeon.encounterMapCredit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DungeonPage;
