import React, { useState } from 'react';

//  importing utils
import Input from '../UI/Input';
//  importing styles
import classes from './AddForm.module.scss';
import Button from '../UI/Button';

const AddForm = (props) => {
  const [error, setError] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    const firstName = event.target[0].value;
    const lastName = event.target[1].value;

    const response = await fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        team_id: props.team._id,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const newUsers = [...props.team.users, data];

      props.updateUsers(newUsers);

      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <React.Fragment>
      <h2 className={classes.h2}>Add User</h2>
      <form className={classes.form} onSubmit={submitHandler}>
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
          Last Name
        </Input>
        <Button className={classes.button}>Create</Button>
        {error && <p className={classes.p}>Something went wrong!</p>}
      </form>
    </React.Fragment>
  );
};

export default AddForm;
