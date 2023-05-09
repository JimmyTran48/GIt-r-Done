import React from 'react';

//  importing utils
import Input from '../UI/Input';
//  importing styles
import classes from './AddForm.module.scss';
import Button from '../UI/Button';

const AddForm = (props) => {
  return (
    <React.Fragment>
      <h2 className={classes.h2}>Add User</h2>
      <form className={classes.form}>
        <Input
          type='text'
          id='firstName'
          labelClass={classes.label}
          inputClass={classes.input}>
          First Name
        </Input>
        <Input
          type='text'
          id='lastName'
          labelClass={classes.label}
          inputClass={classes.input}>
          lastName
        </Input>
        <Button className={classes.button}>Create</Button>
      </form>
    </React.Fragment>
  );
};

export default AddForm;
