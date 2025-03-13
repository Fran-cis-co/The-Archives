// Homepage card component file to have it be more modular and cleaner code for each file
import React from "react";
import "../../../App.css";
// Import data which will be used as a provided hyperlink
import { homepageListing } from "../../../data/HomePageListing";

const HomePageCards = () => {
  return (
    <>
      <div className="row p-2">
        <h2 className="p-2">Resources: </h2>
        {homepageListing.map((item, index) => {
          return (
            <div className="col" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                {/* Included sources where I acquired the image from */}
                <a href={item.src}>
                  <img src={item.img} className="card-img-top" alt="..." />
                </a>
                <div className="card-body foreground-color">
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
    </>
  );
};

export default HomePageCards;
