import React from "react";

const ActivityEncounterMaps = ({ maps, credit }) => {
  return (
    <>
      {/* Introduction message */}
      <div id="encounterMaps">
        <h1>Encounter Maps</h1>
        <p>
          Below are all the maps for each encounter. Just click on a accordian
          to see each encounter map.
        </p>
      </div>

      {/* Display all the encounter maps through the use of mapping */}
      <div className="accordion">
        {maps.map((encounter, i) => {
          return (
            <div className="pt-3" id={encounter.name}>
              <h2>{encounter.name}</h2>
              <img
                className="center pb-3"
                src={encounter.encounterMap}
                width={1400}
                height={800}
              />
              <br />
              {/* Include a button which allows user to go all the way back to the top of the page */}
              <button type="button" className="btn btn-outline-primary">
                <a href="#introduction" style={{ textDecoration: "none" }}>
                  Back to the intro
                </a>
              </button>
            </div>
          );
        })}
      </div>

      {/* Section which displays credit to whoever made an encounter map */}
      <div id="encounterMapsCredit" className="pt-3">
        {credit.map((cred, i) => {
          return (
            <p>
              Thank you &#20;
              <a href={cred.source}>{cred.name}</a> &#20; for {cred.maps}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default ActivityEncounterMaps;
