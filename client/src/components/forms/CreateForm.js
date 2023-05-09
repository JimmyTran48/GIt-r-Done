import React from 'react';

//  importing utils
import Input from '../UI/Input';
//  importing styles
import classes from './CreateForm.module.scss';
import Button from '../UI/Button';

const CreateForm = (props) => {
  return (
    <React.Fragment>
      <h2 className={classes.h2}>Create Task</h2>
      <form className={classes.form}>
        <Input
          type='text'
          id='task'
          maxLength='25'
          labelClass={classes.label}
          inputClass={classes.input}>
          Task Name
        </Input>
        <Input
          type='date'
          id='date'
          labelClass={classes.label}
          inputClass={classes.input}>
          Deadline
        </Input>
        <label htmlFor='description' className={classes.label}>
          Description
        </label>
        <textarea
          id='description'
          className={classes.textarea}
          rows='3'
          cols='50'></textarea>
        <Button className={classes.button}>Create</Button>
      </form>
    </React.Fragment>
  );
};

export default CreateForm;
