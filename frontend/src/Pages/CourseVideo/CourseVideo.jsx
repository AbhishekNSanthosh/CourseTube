import React from "react";
import "./CourseVideo.css";
import VideoImg from "../../Assets/Image (3).png";
import playlist from "../../Assets/Image (4).png";
import account from "../../Assets/Avatar (1).png";

const CourseVideo = () => {

  return (
    <div className="course-video-container">
      <div className="video-container">
        <div className="video-play-container">
          <div className="video-nav">
            <span className="video-nav-item">
              Home | Domains |{" "}
              <span className="nav-red">Crash Course on Python</span>
            </span>
          </div>
          <div className="video-play">
            <img src={VideoImg} alt="" className="play-img" />
          </div>
          <div className="video-nav">
            <span className="video-nav-title">
              Crash Course on Python | Episode 1
            </span>
          </div>
        </div>
        <div className="playlist-container">
          <div className="playlist-title">
            <span className="title-name">Course Playlists</span>
          </div>
          <div className="playlist-column">

            {/* component to be iterated */}
            <div className="playlist">
              <div className="playlist_left">
                <img src={playlist} alt="" className="playlist_img" />
              </div>
              <div className="playlist_right">
                <div className="playlist_right_row">
                  <span className="playlist_thumb">Python - Introduction</span>
                </div>
                <div className="playlist_right_row">
                  <span className="playlist_thumb_time">5.08 m</span>
                </div>
              </div>
            </div>
            {/* ** */}
          </div>
        </div>
      </div>

      <div className="account-row">
        <div className="account">
          <div className="account-box">
            <div className="account-img">
              <img src={account} alt="" className="accountimg" />
            </div>
            <div className="accountnamebox">
              <span className="accountname">Esther Howard</span>
            </div>
            <div className="viewbutton">
              <button className="viewaccount">View Account</button>
            </div>
          </div>
        </div>
        <div className="share">
          <div className="share-row">
            <div className="viewbutton">
              <button className="viewaccount" >View Account</button>
            </div>
            <div className="viewbutton">
              <button className="sharebutton">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;
