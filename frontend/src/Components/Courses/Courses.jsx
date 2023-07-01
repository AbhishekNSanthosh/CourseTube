import React from 'react'
import './Courses.css'
import avatar from "../../Assets/Avatar.png";
import rating from "../../Assets/Frame 402.png";
import courseCard2 from "../../Assets/Image (1).png";
import courseCard3 from "../../Assets/Image (2).png";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { Button } from '@mui/material';

export default function Courses() {
  return (
    <div className="courseItem">
            <div className="courseCard">
              <img src={courseCard3} alt="" className="courseCardImg" />
            </div>
            <div className="CourseDetails">
              <div className="category">
                <span className="categoryName">Design</span>
              </div>
              <div className="courseDetails">
                <div className="course">
                  <div className="courseTitle">
                    <span className="courseName">Building User Interface..</span>
                  </div>
                  <div className="arrowIconoutword">
                    <ArrowOutwardIcon className="arrowUp"/>
                  </div>
                </div>
                <div className="courseDesc">
                  <span className="courseDescDetails">
                  Learn how to apply User Experience (UX) principles to your website designs.
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
                    <span className="providerNameSpan">Esther Howard</span>
                  </div>
                </div>
                <div className="addButton">
                  <Button variant="contained">Add</Button>
                </div>
              </div>
            </div>
          </div>
  )
}
