import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import './Signin.css'
import signupimg from '../../Assets/Left.png'
import { Checkbox, Divider, TextField } from '@mui/material';
import { pink, purple } from '@mui/material/colors';
import google from '../../Assets/google.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ modalOpen, handleClose }) {

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modalOpen}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '10px'
          }}>
            <div className="signup">
              <div className="signup-col">
                <img src={signupimg} alt="" className="signup-img" />
              </div>
              <Divider orientation='vertical' sx={{
                border: '0.5px solid lightgray',
                height: '25rem'
              }} />
              <div className="signup-col">
                <div className="signup-row">
                  <div className="google-div">
                    <img src={google} alt="" className="google-img" />
                    <span className="google">Signup with google</span>
                  </div>
                </div>
                {/* <Divider orientation='horizontal' sx={{
                border: '.1px solid lightgray',
                width: '10rem'
              }} /> */}
                <div className="signup-row">
                  <TextField variant='outlined' label='Email' type='text' />
                </div>
                <div className="signup-row">
                  <TextField variant='outlined' label='Password' type='text' />
                </div>
                <div className="signup-row check">
                  <Checkbox
                    size='13'
                    // {...label}
                    
                    sx={{
                      color: purple[800],
                      '&.Mui-checked': {
                        color: purple[600],
                      },
                    }}
                  />
                  <span className="checkbox">
                    I agreed to the Terms & Conditions
                  </span>
                </div>
                <div className="signup-row">
                  <button className="signup-button">Sign Up</button>
                </div>
                <div className="signup-row check">
                  <button className="create-button">Create Account</button>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}