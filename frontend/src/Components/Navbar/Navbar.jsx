import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/CourseTube.png";
import TextField from "@mui/material/TextField";
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExploreDrop from '../ExploreDrop';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import TransitionsModal from "../SigninModal/Signin";
import CreateAccount from "../CreateAccountModal/CreateAccount";

const Navbar = () => {
  const [modalSignInOpen, setModalSignInOpen] = useState(false);
  const [modalSignUpOpen, setModalSignUpOpen] = useState(false);


  const handleClose = () => {
    setModalSignInOpen(false);
    setModalSignUpOpen(false)
  }

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to='/' className="link">
            <img className="logoImg" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="searchContainer">
          <div className="searchBox">
            <div className="search">
              <TextField
                placeholder='Want to learn ?'
                height='20px'
                sx={{
                  "& fieldset": { border: "none" },
                }}
                InputProps={{
                  style: {
                    height: "40px",
                    width: '450px'
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="explore">
              <ExploreDrop />
            </div>
          </div>
        </div>
        <div className="signinContainer">
          <div className="sigin">
            <span className="siginSpan" onClick={() => {
              setModalSignInOpen(true);
            }}>Sign In</span>
          </div>
          <div className="createAccount">
            <Button variant="contained" onClick={() => {
              setModalSignUpOpen(true)
            }}>Create Free Account</Button>
          </div>
        </div>
      </div>
      <TransitionsModal modalSignInOpen={modalSignInOpen} handleClose={handleClose} />
      <CreateAccount modalSignUpOpen={modalSignUpOpen} handleClose={handleClose}/>
    </div>
  );
};

export default Navbar;
