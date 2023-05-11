import React, { useState } from 'react';

//  importing children
import Tasks from './Tasks';
import TaskModal from '../../layout/TaskModal';
//  importing utils
import Card from '../../UI/Card';
//  importing styles
import classes from './TasksContainer.module.scss';
import Button from '../../UI/Button';

const TasksContainer = (props) => {
  const [view, setView] = useState(-2);
  const [target, setTarget] = useState(-2);
  const render = props.user.tasks.map((task, index) => {
    return (
      <Tasks
        key={index}
        user={props.id}
        id={index}
        viewTask={(view, target) => {
          setTarget(target);
          setView(view);
        }}>
        {task.name}
      </Tasks>
    );
  });

  return (
    <React.Fragment>
      {view > -1 && (
        <TaskModal
          users={props.users}
          onClose={() => {
            setView(-2);
          }}
          view={view}
          target={target}
        />
      )}
      <Card className={classes.card}>
        <h2 className={classes.h2}>{props.user.firstName}</h2>
        <ul className={classes.ul}>
          {render}
          <li>
            <Button
              className={classes.button}
              onClick={() => {
                props.createTask(props.id);
              }}>
              new task
            </Button>
          </li>
        </ul>
      </Card>
    </React.Fragment>
  );
};

export default TasksContainer;
