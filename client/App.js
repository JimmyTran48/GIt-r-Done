import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../client/src/redux/actions/actions';
//  importing utils
import PreLogin from './src/components/preLogin/PreLogin';
import PostLogin from './src/components/postLogin/PostLogin';

const mapStateToProps = (state) => ({
  team: state.team,
});

const mapDispatchToProps = (dispatch) => ({
  updateTeam: (team) => {
    dispatch(actions.updateTeam(team));
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
      updateTeam={props.updateTeam}
    />
  );

  if (props.team) {
    render = <PostLogin />;
  }

  return <React.Fragment>{render}</React.Fragment>;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
