import React from "react";

// Component which displays a video explaining how to get the red border chests if it exists within an activity
const ActivityRedBorderTutorial = ({ video }) => {
  return (
    <>
      <h2 className="pt-3">Red Border Chest</h2>
      <p>Video which displays how to obtain the red border chest</p>

      {/* Display every video within the database along with credit of the Youtuber's name */}
      {video.map((tut, id) => {
        return (
          <div id="redborder">
            <iframe
              width="1400"
              height="600"
              src={tut.link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p>
              Thank you <a href={tut.channelLink}>{tut.name}</a> {tut.chests}
            </p>
          </div>
        );
      })}

      {/* Include a button which allows user to go all the way back to the top of the page */}
      <button type="button" className="btn btn-outline-primary">
        <a href="#introduction" style={{ textDecoration: "none" }}>
          Back to the intro
        </a>
      </button>
    </>
  );
};

export default ActivityRedBorderTutorial;
