import React from 'react';

//  importing children components
import Button from '../../UI/Button';
//  importing styles
import classes from './NavBar.module.scss';

const NavBar = (props) => {
  return (
    <nav className={classes.nav}>
      <h2 className={classes.h2}>Username</h2>
      <div>
        <Button className={classes.button} onClick={props.addUser}>
          Add User
        </Button>
        <Button className={classes.start} onClick={props.createTask}>
          Create Task
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
