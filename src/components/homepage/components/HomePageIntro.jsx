import React from "react";
// Import text for the homepage to have more clean code
import { intro, intro2 } from "../../../data/HomePageText";

const HomePageIntro = () => {
  return (
    <>
      <div className="row p-2">
        <div className="col">
          <h1>Welcome to The Archives!</h1>
          <p>{intro}</p>
        </div>
      </div>
      <div className="row p-2">
        <div className="col">
          <p>{intro2}</p>
        </div>
      </div>
    </>
  );
};

export default HomePageIntro;
