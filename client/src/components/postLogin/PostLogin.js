import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions';
//  importing children
import AddModal from '../layout/AddModal';
import CreateModal from '../layout/CreateModal';
import TasksContainer from './tasks/TasksContainer';
//  importing utils
import Card from '../UI/Card';
import NavBar from './navbar/NavBar';

//  importing styles
import classes from './PostLogin.module.scss';

const mapStateToProps = (state) => ({
  team: state.team,
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  updateUsers: (users) => dispatch(actions.updateUsers(users)),
});

const PostLogin = (props) => {
  const [add, setAdd] = useState(false);
  const [create, setCreate] = useState(false);

  return (
    <React.Fragment>
      {add && (
        <AddModal
          onClose={() => {
            setAdd(false);
          }}
          team={props.team}
          users={props.users}
          updateUsers={props.updateUsers}
        />
      )}
      {create && (
        <CreateModal
          onClose={() => {
            setCreate(false);
          }}
        />
      )}
      <NavBar
        addUser={() => {
          setAdd(true);
        }}
        team={props.team}
      />
      <Card className={classes.card}>
        <TasksContainer
          createTask={() => {
            setCreate(true);
          }}
        />
      </Card>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PostLogin);
