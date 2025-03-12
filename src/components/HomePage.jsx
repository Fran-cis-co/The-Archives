import React from "react";

// Import data which will be used as a provided hyperlink
import { homepageListing } from "../data/HomePageListing";
// Import text for the homepage to have more clean code
import { intro, disclaimer, intro2 } from "../data/HomePageText";

/*
  TO-DO:
    - Seperate homepage into smaller components
    - Work on Dungeon homepage
*/

const HomePage = () => {
  return (
    // Use Grid style layout for easy design
    <div className="container text-center p-2">
      <div className="row p-2">
        <div className="col">
          <h1>Welcome to Destiny Resources!</h1>
          <p>{intro}</p>
        </div>
      </div>
      <div className="row p-2">
        <div className="col">
          <p>{intro2}</p>
        </div>
      </div>
      <div className="row p-2">
        {homepageListing.map((item, index) => {
          return (
            <div className="col" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                {/* Included sources where I acquired the image from */}
                <a href={item.src}>
                  <img src={item.img} className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    {item.desc} (click on image for source of image)
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row p-2">
        <div className="col">
          <h2>DISCLAIMER</h2>
          <p>{disclaimer}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
