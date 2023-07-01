import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import bannerleftimg from "../../Assets/CourseTube (1).png";
import Button from "@mui/material/Button";
import { InputAdornment } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import titleImage from "../../Assets/Frame 13.png";
import rightBanner from "../../Assets/Group 7609.png";
import circleImg from "../../Assets/Ellipse 158.png";
import userEx from "../../Assets/icon.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import web from "../../Assets/icon2.png";
import marketing from "../../Assets/icon3.png";
import courseCard1 from "../../Assets/Image.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import avatar from "../../Assets/Avatar.png";
import rating from "../../Assets/Frame 402.png";
import courseCard2 from "../../Assets/Image (1).png";
import courseCard3 from "../../Assets/Image (2).png";
import { Link } from "react-router-dom";
import Courses from "../../Components/Courses/Courses";

const Home = () => {
  return (
    <div className="home">
    
      <div className="bannerContainer">
        <div className="Container">
          <div className="bannerLeft">
            <div className="bannerImg">
              <img className="bannerImage" src={bannerleftimg} alt="banner" />
            </div>
            <div className="bannerTitle">
              <span className="title1">
                Youtube Learning Made Easier.............
              </span>
            </div>
            <div className="bannerTitle">
              <span className="title2">
                Provides you with the latest online learning system and material
                that help your knowledge growing.
              </span>
            </div>
            <div className="bannerTitle">
              <Button href="#/domains"
                sx={{ height: "50px", borderRadius: "10px" }}
                variant="contained"
              >
                Explore courses
              </Button>
            </div>
            <div className="bannerTitle">
              <img src={titleImage} alt="" className="title" />
            </div>
          </div>
          <div className="bannerRight">
            <img src={rightBanner} alt="" className="rightBannerImg" />
          </div>
        </div>
        <div className="circle">
          <img src={circleImg} alt="" className="circleImg" />
        </div>
      </div>
      <div className="serviceContainer">
        <div className="serviceTitle">
          <span className="serviceTitleName">Our Services</span>
        </div>
        <div className="serviceTitle">
          <span className="serviceTitleHeading">
            Explore courses on the domains......
          </span>
        </div>
        <div className="servicesRow">
          <div className="serviceItem">
            <div className="serviceItemRow">
              <div className="iconDiv">
                <img src={userEx} alt="" className="icon" />
              </div>
              <div className="serviceItemName">
                <span className="item">User Experience</span>
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

          
          <div className="serviceItem">
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

          <div className="serviceItem">
            <div className="serviceItemRow">
              <div className="iconDiv">
                <img src={marketing} alt="" className="icon" />
              </div>
              <div className="serviceItemName">
                <span className="item">Marketing</span>
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
      </div>

      <div className="TrendingCourse">
        <div className="exploreCourse">
          <span className="exploreCourseName">Explore Programs</span>
        </div>
        <div className="exploreCourse">
          <span className="Trending">Some Trending Courses</span>
        </div>
        <div className="coursesList">      
          <Courses/>
          <Courses/>
          <Courses/>
        </div>
      </div>

      <div className="moreCourses">
        <button className="exploreButton">Explore All Courses</button>
      </div>
    </div>
  );
};

export default Home;
