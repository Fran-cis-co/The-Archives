import React from "react";

// Component which displays the section of the page which shows a video of how to obtain the secret chests of an activity
const ActivityPageSecretChestsVideo = ({ video }) => {
  return (
    <>
      <h2>Secret Chests</h2>
      <p>Video which displays where all the secret chests are in the raid</p>

      {/* Display every video within the database along with credit of the Youtuber's name */}
      {video.map((tut, id) => {
        return (
          <div id="secretchests">
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

export default ActivityPageSecretChestsVideo;
