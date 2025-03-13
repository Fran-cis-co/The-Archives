import React from "react";
import { dungeons } from "../../../data/Dungeons";

import "../../../App.css";
import { Link } from "react-router";

// Display all the dungeons currently available in the game through the use of the card
// component of Bootstrap

const DungeonHomePageCards = () => {
  return (
    <>
      <div className="row text-center">
        {dungeons.map((dungeon, i) => {
          return (
            <div className="col-4 p-3" key={i}>
              <div className="card foreground-color">
                <a href={dungeon.src}>
                  <img
                    src={dungeon.img}
                    className="card-img-top"
                    alt="..."
                    // Give a height of 250 to ensure all cards are of the same height
                    height={250}
                  />
                </a>
                <div className="card-body foreground-color">
                  <h5 className="card-title">{dungeon.name}</h5>
                  {/* Users will be able to click on a button to go to the respective page of the dungeon with all the available info */}
                  <Link to={"/DungeonHomePage/" + dungeon.link}>
                    <a href="#" className="btn btn-primary">
                      Go
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DungeonHomePageCards;
