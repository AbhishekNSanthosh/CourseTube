import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="footer">
      <div className="Container">
        <div className="footerLeft">
          <div className="CourseTube">
            <span className="CoursetubeTitle">CourseTube</span>
          </div>
          <div className="CourseTubeDes">
            <span className="CoursetubeDesc">
              Youtube Learning made easier !!!
            </span>
          </div>
          <div className="CourseCopy">
            <span className="CoursetubeCopy">
              © Coursetube. All rights reserved.
            </span>
          </div>
        </div>
        <div className="footerRight">
          <div className="productTitle">
            <span className="productName">Product</span>
          </div>
          <div className="products">
            <div className="product">
              <span className="product1">Overview</span>
            </div>
            <div className="product">
              <span className="product1">Features</span>
            </div>
            <div className="product">
              <span className="product1">Solutions</span>
            </div>
          </div>
          <div className="socialIcons">
            <div className="Icons">
              <TwitterIcon className="socialIcon" />
            </div>
            <div className="Icons">
              <LinkedInIcon className="socialIcon" />
            </div>
            <div className="Icons">
              <FacebookIcon className="socialIcon" />
            </div>
            <div className="Icons">
              <GitHubIcon className="socialIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
