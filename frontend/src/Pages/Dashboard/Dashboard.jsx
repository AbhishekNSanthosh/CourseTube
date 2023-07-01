import React from 'react'
import './Dashboard.css'
import pic from '../../Assets/Ellipse 356.png'
import Courses from '../../Components/Courses/Courses'

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="dasboard_items_row">
                <div className="dashboard_col+left">
                    <div className="dashboard_left">
                        <img src={pic} alt="" className="profile_pic" />
                        <span className="profile_name">ASWIN S</span>
                    </div>
                </div>
                <div className="dashboard_col_right">
                    <div className="dasboard_right">
                        <div className="dashboard_right_row">
                            <div className="dashboard_right_row_col">
                                <span className="right_items">Email id</span>
                            </div>
                            <div className="dashboard_right_row_col right_most">
                                <span className="right_items_value">aswhins@gmail.com</span>
                            </div>
                        </div>
                        <div className="dashboard_right_row">
                            <div className="dashboard_right_row_col">
                                <span className="right_items">phone no</span>
                            </div>
                            <div className="dashboard_right_row_col right_most">
                                <span className="right_items_value">995765456</span>
                            </div>
                        </div>
                        <div className="dashboard_right_row">
                            <div className="dashboard_right_row_col">
                                <span className="right_items">date of birth</span>
                            </div>
                            <div className="dashboard_right_row_col special_right">
                                <div className="dashboard_right_row_col right_most special_row">
                                    <span className="right_items_value">22 June 2000</span>
                                </div>
                                <span className="right_items">gender</span>
                                <div className="dashboard_right_row_col right_most special_row">
                                    <span className="right_items_value">Male</span>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard_right_row">
                            <div className="dashboard_right_row_col">
                                <span className="right_items">institution</span>
                            </div>
                            <div className="dashboard_right_row_col right_most">
                                <span className="right_items_value">Carmel CBSE college</span>
                            </div>
                        </div>
                        <div className="dashboard_right_row">
                            <div className="dashboard_right_row_col">
                                <span className="right_items">Country</span>
                            </div>
                            <div className="dashboard_right_row_col special_right">
                                <div className="dashboard_right_row_col right_most special_row">
                                    <span className="right_items_value">India</span>
                                </div>
                                <span className="right_items">State</span>
                                <div className="dashboard_right_row_col right_most special_row">
                                    <span className="right_items_value">Kerala</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dasboard_items_row">
                <span className="added_playlist">
                    Added <span className="Colored">Playlists</span>
                </span>
            </div>
            <div className="dasboard_items_row playlist_list">
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
            </div>
        </div>
    )
}
