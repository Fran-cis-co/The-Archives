import React from "react";

// Component which just displays the activity name along with its description when hovering over the node in-game
const ActivityPageIntroSection = ({ name, desc }) => {
  return (
    <>
      <div id="introduction">
        <h1>{name}</h1>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default ActivityPageIntroSection;
