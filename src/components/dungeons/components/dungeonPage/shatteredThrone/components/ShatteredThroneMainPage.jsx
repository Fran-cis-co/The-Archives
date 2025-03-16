import React, { useState } from "react";
import ShatteredThroneEncounterMaps from "./ShatteredThroneEncounterMaps";
import { dungeons } from "../../../../../../data/Dungeons";
import "../../../../../../App.css";

const ShatteredThroneMainPage = ({ shatteredThrone }) => {
  // Use a usestate to be able to open one accordian at a time
  let [activeIndex, setActiveIndex] = useState();

  const toggleActiveIndex = (i) => {
    if (activeIndex === i) {
      setActiveIndex();
    } else {
      setActiveIndex(i);
    }
  };

  // const shatteredThrone = dungeons[0];

  return (
    // <>

    //   <div class="col-10">
    //     <div
    //       data-bs-spy="scroll"
    //       data-bs-target="#navbar-example3"
    //       data-bs-smooth-scroll="true"
    //       class="scrollspy-example-2"
    //       tabindex="0"
    //     >
    //       {/* --- Intro Text --- */}

    //       {/* The introduction section will give a some text on how the page works and a youtube tutorial with credit */}
    //       <div id="introduction">
    //         <h1>{shatteredThrone.name}</h1>
    //         <p>{shatteredThrone.desc}</p>
    //       </div>
    //       <div id="youtube">
    //         <h2>Youtube Guide</h2>
    //         <p>Thank you Datto for the guide</p>
    //         <iframe
    //           width="1070"
    //           height="600"
    //           src="https://www.youtube.com/embed/xWDOnB6HLWI?si=XA7w3O5oDubNx1Cs"
    //           title="YouTube video player"
    //           frameborder="0"
    //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //           referrerpolicy="strict-origin-when-cross-origin"
    //           allowfullscreen
    //         ></iframe>
    //       </div>
    //       <div id="encounterMaps">
    //         <h1>Encounter Maps</h1>
    //         <p>
    //           Below are all the maps for each encounter. Just click on an
    //           accordian to see each encounter map.
    //         </p>
    //       </div>

    //       {/* --- Encounter Map section --- */}

    //       {/* These are put in an accordion style for a cleaner homepage
    //           All of these maps will be given appropriate credit to whoever created them.
    //       */}
    //       {/* Pass variable which stores all the dungeon info as a prop to reduce lines of code on component
    //           Pass all the necessary items for the useState variable
    //       */}
    //       <div className="accordion">
    //         <ShatteredThroneEncounterMaps
    //           dungeon={shatteredThrone.encounterMaps}
    //           activeIndex={activeIndex}
    //           toggleActiveIndex={toggleActiveIndex}
    //         />
    //         <p>
    //           Credit to{" "}
    //           <a href={shatteredThrone.encounterMapCredit}>
    //             Pyranie & Tnerouken
    //           </a>{" "}
    //           for the encounter maps
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    // </>
    <>
      <div>hello</div>
    </>
  );
};

export default ShatteredThroneMainPage;
