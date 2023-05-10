import React from 'react';

//  importing children
import Tasks from './Tasks';
//  importing utils
import Card from '../../UI/Card';
//  importing styles
import classes from './TasksContainer.module.scss';
import Button from '../../UI/Button';

const TasksContainer = (props) => {
  const render = props.user.tasks.map((task, index) => {
    return (
      <Tasks key={index} id={index}>
        {task}
      </Tasks>
    );
  });

  return (
    <Card className={classes.card}>
      <h2 className={classes.h2}>{props.user.firstName}</h2>
      <ul className={classes.ul}>{render}</ul>
      <div className={classes.div}>
        <Button
          className={classes.button}
          onClick={() => {
            props.createTask(props.id);
          }}>
          new task
        </Button>
      </div>
    </Card>
  );
};

export default TasksContainer;
