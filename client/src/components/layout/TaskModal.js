import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions';

//  importing style
import classes from './TaskModal.module.scss';
//  importing utils
import Modal from '../UI/Modal';

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  updateUsers: (users) => dispatch(actions.updateUsers(users)),
});

const TaskModal = (props) => {
  const currentTask = props.users[props.target].tasks[props.view];

  return (
    <Modal onClose={props.onClose}>
      <h2 className={classes.h2}>{currentTask.name}</h2>
      <h3 className={classes.h3}>
        <span className={classes.span}>Deadline: </span>
        {currentTask.date}
      </h3>
      <p className={classes.p}>{currentTask.description}</p>
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal);
