import React from 'react';

//  importing utils
import Input from '../UI/Input';
//  importing styles
import classes from './LoginForm.module.scss';
import Button from '../UI/Button';

const LoginForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        type='text'
        id='username'
        labelClass={classes.label}
        inputClass={classes.input}>
        USERNAME
      </Input>
      <Input
        type='password'
        id='password'
        labelClass={classes.label}
        inputClass={classes.input}>
        PASSWORD
      </Input>
      <Button className={classes.button}>Log In</Button>
    </form>
  );
};

export default LoginForm;
