import React from "react";

const ActivityScrollSpy = ({ activity }) => {
  return (
    <>
      <div className="col-3">
        <nav
          id="navbar-example3"
          className="h-100 flex-column align-items-stretch "
          data-bs-spy="scroll"
          sticky="top"
        >
          <nav className="nav nav-pills flex-column">
            <a className="nav-link" href="#introduction">
              Youtube Guides
            </a>
            <nav className="nav nav-pills flex-column">
              {/* Have sections for each youtube video to have easy navigation */}
              {activity.tutorial.map((tut, i) => {
                return (
                  <a className="nav-link ms-3 my-1" href={"#" + tut.title}>
                    {tut.title}
                  </a>
                );
              })}
            </nav>
            <a className="nav-link" href="#encounterMaps">
              Maps
            </a>
            <nav className="nav nav-pills flex-column">
              {activity.encounterMaps.map((activ, i) => {
                return (
                  <a className="nav-link ms-3 my-1" href={"#" + activ.name}>
                    {activ.name}
                  </a>
                );
              })}

              {activity.secretChests && (
                <a className="nav-link" href="#secretchests">
                  Secret Chests
                </a>
              )}

              {activity.redBorder && (
                <a className="nav-link" href="#redborder">
                  Red Border Chest
                </a>
              )}
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

export default ActivityScrollSpy;
