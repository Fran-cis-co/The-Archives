// Homepage card component file to have it be more modular and cleaner code for each file
import React from "react";
import { Link } from "react-router";
import "../../../App.css";

const HomePageCards = ({ listing }) => {
  return (
    <>
      <div className="row p-2">
        {/* Fill each card for the homepage to display the necessary information through the use of mapping */}
        {listing.map((item, index) => {
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
                  {/* Send user to the same page except show different items based on the item clicked (raids or dungeons) */}
                  {/* If it's the other resources click, then it goes to a different page */}
                  {item.name === "Other Resources" ? (
                    <Link to={`/${item.name}`}>
                      <a href="#" className="btn btn-primary">
                        Go
                      </a>
                    </Link>
                  ) : (
                    <Link to={`/DungeonAndRaids/${item.name}`}>
                      <a href="#" className="btn btn-primary">
                        Go
                      </a>
                    </Link>
                  )}
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
