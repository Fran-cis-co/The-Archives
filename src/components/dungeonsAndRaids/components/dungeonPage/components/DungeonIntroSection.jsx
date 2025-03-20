import React from "react";

// Class which contains the introduction information of the dungeon such as the name and
// in-game description

const DungeonIntroSection = ({ name, desc }) => {
  return (
    <>
      <div id="introduction">
        <h1>{name}</h1>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default DungeonIntroSection;
