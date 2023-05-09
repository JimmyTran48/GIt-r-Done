import React, { useState } from 'react';
import { connect } from 'react-redux';

//  importing utils
import Input from '../UI/Input';
//  importing styles
import classes from './LoginForm.module.scss';
import Button from '../UI/Button';

const mapStateToProps = (state) => ({
  team: state.team,
});

const mapDispatchToProps = (dispatch) => ({
  updateTeam: (team) => {
    dispatch(actions.updateTeam(team));
  },
});

const LoginForm = (props) => {
  const [error, setError] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const password = event.target[1].value;

    //search database for team and password
    //send get request to /teams endpoint
    const team = await fetch(
      `localhost:3000/teams?name=${name}&password=${password}`
    );
    //if team exists
    if (team) {
      //use redux to change state of team
      props.updateTeam(team);
    } else {
      setError(true);
    }
  };

  return (
    <React.Fragment>
      <h2 className={classes.h2}>Log In</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          type='text'
          id='teamname'
          labelClass={classes.label}
          inputClass={classes.input}>
          TEAM NAME
        </Input>
        <Input
          type='password'
          id='password'
          labelClass={classes.label}
          inputClass={classes.input}>
          PASSWORD
        </Input>
        {error && <p className={classes.p}>Incorrect team name or password!</p>}
        <Button className={classes.button}>Log In</Button>
      </form>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
