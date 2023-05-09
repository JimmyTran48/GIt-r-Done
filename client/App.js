import React, { useState } from 'react';
import { connect } from 'react-redux';

//  importing children
import NavBar from './src/components/navbar/NavBar';

//  importing utils
import LoginModal from './src/components/layout/LoginModal';
import SignupModal from './src/components/layout/SignupModal';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => {
    dispatch(actions.updateUser(user));
  },
});

const App = () => {
  const [loggingIn, setLoggingIn] = useState(false);
  const [signup, setSignup] = useState(true);
  return (
    <React.Fragment>
      {loggingIn && (
        <LoginModal
          onClose={() => {
            setLoggingIn(false);
          }}
        />
      )}
      {signup && (
        <SignupModal
          onClose={() => {
            setSignup(false);
          }}
        />
      )}
      <NavBar
        login={() => {
          setLoggingIn(true);
        }}
        signup={() => {
          setSignup(true);
        }}
      />
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
