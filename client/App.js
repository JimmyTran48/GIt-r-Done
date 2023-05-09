import React, { useState } from 'react';
import { connect } from 'react-redux';

//  importing utils
import PreLogin from './src/components/preLogin/PreLogin';
import PostLogin from './src/components/postLogin/PostLogin';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => {
    dispatch(actions.updateUser(user));
  },
});

const App = (props) => {
  const [loggingIn, setLoggingIn] = useState(false);
  const [signup, setSignup] = useState(false);

  let render = (
    <PreLogin
      loggingIn={loggingIn}
      signup={signup}
      setLoggingIn={setLoggingIn}
      setSignup={setSignup}
    />
  );

  if (props.user) {
    render = <PostLogin />;
  }

  return <React.Fragment>{render}</React.Fragment>;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
