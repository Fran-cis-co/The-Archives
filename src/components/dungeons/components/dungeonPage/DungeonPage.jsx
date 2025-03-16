import React from "react";
import { useParams } from "react-router";
import { dungeons } from "../../../../data/Dungeons";

import DungeonIntroSection from "./components/DungeonIntroSection";
import DungeonVideoTutorialSection from "./components/DungeonVideoTutorialSection";
import DungeonEncounterMaps from "./components/DungeonEncounterMaps";

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
      <div className="container pt-3">
        <div className="row">
          <div className="col">
            <div
            // data-bs-spy="scroll"
            // data-bs-target="#navbar-example3"
            // data-bs-smooth-scroll="true"
            // className="scrollspy-example-2"
            // tabindex="0"
            >
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
              {/* --- Encounter Map section --- */}
              {/* These are put in an accordion style for a cleaner homepage
                All of these maps will be given appropriate credit to whoever created them.
            */}
              {/* Pass variable which stores all the dungeon info as a prop to reduce lines of code on component
                Pass all the necessary items for the useState variable
            */}
              {/* <div className="accordion">
                <ShatteredThroneEncounterMaps
                  dungeon={pickedDungeon.encounterMaps}
                  activeIndex={activeIndex}
                  toggleActiveIndex={toggleActiveIndex}
                />
                <p>
                  Credit to{" "}
                  <a href={shatteredThrone.encounterMapCredit}>
                    Pyranie & Tnerouken
                  </a>{" "}
                  for the encounter maps
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DungeonPage;
