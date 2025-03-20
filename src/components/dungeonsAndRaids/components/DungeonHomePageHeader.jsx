import React from "react";

// Have the page header text be in a different component for cleaner code
// Text might be subject to change
const DungeonHomePageHeader = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Dungeons</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Information of all the current available dungeons in the game.</p>
          <p>
            Click on the button to go to the page of the respective Dungeon.
          </p>
          <p>Click on the images to go to their sources</p>
        </div>
      </div>
    </>
  );
};

export default DungeonHomePageHeader;
