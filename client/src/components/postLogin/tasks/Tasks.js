import React from 'react';

//  importing utils
import Button from '../../UI/Button';
//  importing styles
import classes from './Tasks.module.scss';

const Tasks = (props) => {
  return (
    <li className={classes.li}>
      <Button
        className={classes.button}
        onClick={() => {
          props.viewTask(props.id, props.user);
        }}>
        {props.children}
      </Button>
    </li>
  );
};

export default Tasks;
