import React from "react";
import "./CourseVideo.css";
import VideoImg from "../../Assets/Image (3).png";
import playlist from "../../Assets/1.png";
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
            <div className="playlist">
              <img src={playlist} alt="" className="playlist-img" />
            </div>
            <div className="playlist">
              <img src={playlist} alt="" className="playlist-img" />
            </div>
            <div className="playlist">
              <img src={playlist} alt="" className="playlist-img" />
            </div>
            <div className="playlist">
              <img src={playlist} alt="" className="playlist-img" />
            </div>
            <div className="playlist">
              <img src={playlist} alt="" className="playlist-img" />
            </div>
            <div className="playlist">
              <img src={playlist} alt="" className="playlist-img" />
            </div>
            <div className="playlist">
              <img src={playlist} alt="" className="playlist-img" />
            </div>
            <div className="playlist">
              <img src={playlist} alt="" className="playlist-img" />
            </div>
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
              <button className="viewaccount">View Account</button>
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
