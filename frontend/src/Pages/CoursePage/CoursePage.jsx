import React from "react";
import "./CoursePage.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import web from "../../Assets/icon2.png";
import avatar from "../../Assets/Avatar.png";
import rating from "../../Assets/Frame 402.png";
import courseCard2 from "../../Assets/Image (1).png";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";

const CoursePage = () => {
  return (
    <div className="course-container">
      <div className="course-title-container">
        <span className="course-title">
          Pre-Fetched <span className="course-redtext">Domains </span>
        </span>
      </div>

      <div className="domain-title-container">
        <div className="grid-item">
          <div className="serviceItemRow">
            <div className="iconDiv">
              <img src={web} alt="" className="icon" />
            </div>
            <div className="serviceItemName">
              <span className="item">Web Development</span>
            </div>
          </div>
          <div className="learnMoreRow">
            <div className="learn">
              <span className="learnMoreName">LearnMore </span>
            </div>
            <div className="learnArrow">
              <ArrowForwardIosIcon
                sx={{ fontSize: "15px" }}
                className="arrow"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="course-item-grid-container">

        <Link to='/domains/ui/video' className="link">
          <div className="courseItem">
            <div className="courseCard">
              <img src={courseCard2} alt="" className="courseCardImg" />
            </div>
            <div className="CourseDetails">
              <div className="category">
                <span className="categoryName">Design</span>
              </div>
              <div className="courseDetails">
                <div className="course">
                  <div className="courseTitle">
                    <span className="courseName">Adobe Photoshop</span>
                  </div>
                  <div className="arrowIconoutword">
                    <ArrowOutwardIcon className="arrowUp" />
                  </div>
                </div>
                <div className="courseDesc">
                  <span className="courseDescDetails">
                    Design Web Sites and Mobile Apps that Your Users Love and
                    Return to Again.
                  </span>
                </div>
                <div className="rating">
                  <img src={rating} alt="" className="ratingImg" />
                </div>
              </div>
              <div className="provider">
                <div className="providerDetails">
                  <div className="avatar">
                    <img src={avatar} alt="" className="avatarImg" />
                  </div>
                  <div className="providerName">
                    <span className="providerNameSpan">Jenny Wilson</span>
                  </div>
                </div>
                <div className="addButton">
                  <Button variant="contained">Add</Button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CoursePage;
