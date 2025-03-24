import React from "react";
import { Link } from "react-router";

// Component which will contain the cards to display the activities
// Parameters will be the data to grab and activity type
const ActivityHomePageCards = ({ activity, activityType }) => {
  return (
    <>
      {/* Map through the dataset */}
      <div className="row text-center">
        {activity.map((activ, id) => {
          return (
            // Give each dungeon it's own unique ID which reflects the positon it's in within the js file
            <div className="col-4 p-3" key={id}>
              <div className="card foreground-color">
                <a href={activ.src}>
                  <img
                    src={activ.img}
                    className="card-img-top"
                    alt="..."
                    // Give a height of 250 to ensure all cards are of the same height
                    height={250}
                  />
                </a>
                <div className="card-body foreground-color">
                  <h5 className="card-title">{activ.name}</h5>
                  {/* When a user clicks on the link, they will go to the respective dungeon with its information
                        Every dungeon goes to the same page, however it will display the dungeon's information based on the parameter passed here.
                    */}
                  <Link to={`/DungeonAndRaids/${activityType}/${activ.name}`}>
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

export default ActivityHomePageCards;
