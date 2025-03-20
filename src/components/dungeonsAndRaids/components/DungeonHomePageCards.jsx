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
        {dungeons.map((dungeon, id) => {
          return (
            // Give each dungeon it's own unique ID which reflects the positon it's in within the js file
            <div className="col-4 p-3" key={id}>
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
                  {/* When a user clicks on the link, they will go to the respective dungeon with its information
                      Every dungeon goes to the same page, however it will display the dungeon's information based on the parameter passed here.
                  */}
                  <Link to={`/DungeonHomePage/${dungeon.name}`}>
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
