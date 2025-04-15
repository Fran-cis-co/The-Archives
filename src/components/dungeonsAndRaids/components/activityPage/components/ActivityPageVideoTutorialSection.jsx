import React from "react";

const ActivityPageVideoTutorialSection = ({ videoTut }) => {
  return (
    <>
      {/* Display every video within the database along with credit of the Youtuber's name */}
      {videoTut.map((tut, id) => {
        return (
          <div id={tut.title} className="pb-3">
            <h2>{tut.title}</h2>
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
              Thank you <a href={tut.channelLink}>{tut.name}</a> for the guide
            </p>
            {/* Include a button which allows user to go all the way back to the top of the page */}
            <button type="button" className="btn btn-outline-primary">
              <a href="#introduction" style={{ textDecoration: "none" }}>
                Top of page
              </a>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ActivityPageVideoTutorialSection;
