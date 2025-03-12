import React from "react";
// Import text for the homepage to have more clean code
import { disclaimer } from "../../../data/HomePageText";

const HomePageDisclaimer = () => {
  return (
    <>
      <div className="row p-2">
        <div className="col">
          <h2>DISCLAIMER</h2>
          <p>{disclaimer}</p>
        </div>
      </div>
    </>
  );
};

export default HomePageDisclaimer;
