import React, { useState } from 'react';
import { connect } from 'react-redux';

//  importing utils
import PreLogin from './src/components/beforeLogin/PreLogin';

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
      <PreLogin
        loggingIn={loggingIn}
        signup={signup}
        setLoggingIn={setLoggingIn}
        setSignup={setSignup}
      />
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
