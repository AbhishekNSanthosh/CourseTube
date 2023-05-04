import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import bannerleftimg from "../../Assets/CourseTube (1).png";
import  Button  from '@mui/material/Button';
import { InputAdornment } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import titleImage from '../../Assets/Frame 13.png'
import rightBanner from '../../Assets/Group 7609.png'

const Home = () => {
  return (
    <div className="home">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="bannerContainer">
        <div className="bannerLeft">
          <div className="bannerImg">
            <img className='bannerImage' src={bannerleftimg} alt="banner" />
          </div>
          <div className="bannerTitle">
            <span className="title1">
              Youtube Learning Made Easier.............
            </span>
          </div>
          <div className="bannerTitle">
            <span className="title2">
            Provides you with the latest online learning system and material that help your knowledge growing.
            </span>
          </div>
          <div className="bannerTitle">
          <Button sx={{height:'50px' , borderRadius:'10px'}} variant="contained">Explore courses</Button>
          </div>
          <div className="bannerTitle">
           <img src={titleImage} alt="" className="title" />
          </div>
        </div>
        <div className="bannerRight">
        <img src={rightBanner} alt="" className="rightBannerImg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
