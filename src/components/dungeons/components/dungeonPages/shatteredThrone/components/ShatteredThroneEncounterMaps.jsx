import React, { useState } from "react";

const ShatteredThroneEncounterMaps = ({
  dungeon,
  activeIndex,
  toggleActiveIndex,
}) => {
  return (
    <>
      {dungeon.map((dun, i) => {
        return (
          <>
            <div className="accordion-item" id={dun.name}>
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
                  {dun.name}
                </button>
              </h2>
              {activeIndex === i && (
                <div id="collapseOne" className="accordion-collapse">
                  <div className="accordion-body">
                    <img
                      className="center"
                      src={dun.encounterMap}
                      width={1040}
                      height={600}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* <div className="accordion-item " key={i}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  {dun.name}
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <img src={dun.encounterMap} />
                </div>
              </div>
            </div> */}
          </>
        );
      })}
    </>
  );
};

export default ShatteredThroneEncounterMaps;
