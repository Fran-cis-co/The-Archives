import React from "react";

// TO-DO:
// re-create the usestate for the accordion

// Component which displays all the encounter maps along with the credit on who made the encounter maps

const DungeonEncounterMaps = ({ maps, credit }) => {
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

      <div className="accordion">
        {maps.map((encounter, i) => {
          return (
            <div className="accordion-item" id={encounter.name}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  onClick={() => toggleActiveIndex(i)}
                >
                  {encounter.name}
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse">
                <div className="accordion-body">
                  <img
                    className="center"
                    src={encounter.encounterMap}
                    width={1040}
                    height={600}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section which displays credit to whoever made an encounter map */}
      <div id="encounterMapsCredit">
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

export default DungeonEncounterMaps;
