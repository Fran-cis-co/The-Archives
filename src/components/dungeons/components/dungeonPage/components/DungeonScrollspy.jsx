import React from "react";

const DungeonScrollspy = ({ dungeon }) => {
  console.log(dungeon);
  return (
    <>
      <div className="col-2">
        <nav
          id="navbar-example3"
          className="h-100 flex-column align-items-stretch "
          data-bs-spy="scroll"
          sticky="top"
        >
          <nav className="nav nav-pills flex-column">
            <a className="nav-link" href="#introduction">
              Introducton
            </a>
            <nav className="nav nav-pills flex-column">
              <a className="nav-link ms-3 my-1" href="#youtube">
                Youtube Guide
              </a>
            </nav>
            <a className="nav-link" href="#encounterMaps">
              Encounter Maps
            </a>
            <nav className="nav nav-pills flex-column">
              {dungeon.encounterMaps.map((dun, i) => {
                return (
                  <a className="nav-link ms-3 my-1" href={"#" + dun.name}>
                    {dun.name}
                  </a>
                );
              })}
              {/* <a className="nav-link ms-3 my-1" href="#item-3-1">
                Item 3-1
              </a>
              <a className="nav-link ms-3 my-1" href="#item-3-2">
                Item 3-2
              </a> */}
            </nav>
          </nav>
        </nav>
      </div>
    </>
  );
};

export default DungeonScrollspy;
