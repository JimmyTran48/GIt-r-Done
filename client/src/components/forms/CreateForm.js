import React from 'react';

//  importing utils
import Input from '../UI/Input';
//  importing styles
import classes from './CreateForm.module.scss';
import Button from '../UI/Button';

const CreateForm = (props) => {
  const submitHandler = async (event) => {
    event.preventDefault();

    //get data from form
    const name = event.target[0].value;
    const date = event.target[1].value;
    const description = event.target[2].value;

    const newTask = { name, date, description };
    const user = props.users[props.create];
    const newTasks = [...user.tasks];
    newTasks.push(newTask);

    //update data in db
    const response = await fetch('/users', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ _id: user._id, tasks: newTasks }),
    });


    props.onClose();
    //update entire users state
  };
  return (
    <React.Fragment>
      <h2 className={classes.h2}>Create Task</h2>
      <form className={classes.form} onSubmit={submitHandler}>
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
