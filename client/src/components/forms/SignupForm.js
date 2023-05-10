import React, { useState } from 'react';

//  importing utils
import Input from '../UI/Input';
//  importing styles
import classes from './SignupForm.module.scss';
import Button from '../UI/Button';

const SignupForm = (props) => {
  const [error, setError] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    const name = event.target[0].value;
    const password = event.target[1].value;

    const response = await fetch('/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        name: name,
        password: password,
        users: [],
      }),
    });

    if (response.ok) {
      // setError(false);
      const data = await response.json();
      props.updateTeam(data);
    } else {
      setError(true);
    }
  };

  return (
    <React.Fragment>
      <h2 className={classes.h2}>Create a Team</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          type='text'
          id='username'
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
        <Button className={classes.button}>Sign Up</Button>
        {error && <p className={classes.p}>Something went wrong!</p>}
      </form>
    </React.Fragment>
  );
};

export default SignupForm;
