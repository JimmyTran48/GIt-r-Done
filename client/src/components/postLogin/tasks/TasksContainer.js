import React from 'react';

//  importing children
import Tasks from './Tasks';
//  importing utils
import Card from '../../UI/Card';
//  importing styles
import classes from './TasksContainer.module.scss';
import Button from '../../UI/Button';

const TasksContainer = (props) => {
  return (
    <Card className={classes.card}>
      <h2 className={classes.h2}>Name</h2>
      <ul className={classes.ul}>
        <Tasks>Tasks</Tasks>
      </ul>
      <div className={classes.div}>
        <Button className={classes.button} onClick={props.createTask}>
          new task
        </Button>
      </div>
    </Card>
  );
};

export default TasksContainer;
