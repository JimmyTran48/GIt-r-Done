import React, { useState } from 'react';

//  importing children
import NavBar from './navbar/NavBar';

//  importing utils
import LoginModal from '../layout/LoginModal';
import SignupModal from '../layout/SignupModal';


const PreLogin = (props) => {
  return (
    <React.Fragment>
      {props.loggingIn && (
        <LoginModal
          onClose={() => {
            props.setLoggingIn(false);
          }}
        />
      )}
      {props.signup && (
        <SignupModal
          onClose={() => {
            props.setSignup(false);
          }}
          updateTeam={props.updateTeam}
        />
      )}
      <NavBar
        login={() => {
          props.setLoggingIn(true);
        }}
        signup={() => {
          props.setSignup(true);
        }}
      />
    </React.Fragment>
  );
};

export default PreLogin;
