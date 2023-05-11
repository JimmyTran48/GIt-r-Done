import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions';

//  importing style
import classes from './TaskModal.module.scss';
//  importing utils
import Modal from '../UI/Modal';
import Button from '../UI/Button';

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  updateUsers: (users) => dispatch(actions.updateUsers(users)),
});

const TaskModal = (props) => {
  const currentTask = props.users[props.target].tasks[props.view];

  const clickHandler = async () => {
    // Make copy of state user
    const newUser = { ...props.users[props.target] };
    // Make copy of state user.tasks
    const newTasks = [...newUser.tasks];

    newTasks.splice(props.view, 1);

    // Update db
    const response = await fetch('/users', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ _id: newUser._id, tasks: newTasks }),
    });

    const updatedUser = await response.json();

    const updatedUsers = props.users.slice();
    updatedUsers[props.target] = updatedUser;

    props.onClose();
    props.updateUsers(updatedUsers);
    // Update state
  };

  return (
    <Modal onClose={props.onClose}>
      <h2 className={classes.h2}>{currentTask.name}</h2>
      <h3 className={classes.h3}>
        <span className={classes.span}>Deadline: </span>
        {currentTask.date}
      </h3>
      <p className={classes.p}>{currentTask.description}</p>
      <Button className={classes.button} onClick={clickHandler}>
        Complete!
      </Button>
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal);
