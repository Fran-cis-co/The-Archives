import React from "react";

const ActivityPageVideoTutorialSection = ({ videoTut }) => {
  return (
    <>
      {/* Display every video within the database along with credit of the Youtuber's name */}
      {videoTut.map((tut, id) => {
        return (
          <div id="youtube">
            <h2>Youtube Guide</h2>
            <p>
              Thank you <a href={tut.channelLink}>{tut.name}</a> for the guide
            </p>
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
          </div>
        );
      })}
    </>
  );
};

export default ActivityPageVideoTutorialSection;
