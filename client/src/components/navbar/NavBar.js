import React from 'react';

//  importing children components
import Button from '../UI/Button';
//  importing styles
import classes from './NavBar.module.scss';

const NavBar = (props) => {
  return (
    <nav className={classes.nav}>
      <div>
        <Button className={classes.button}>About</Button>
        <Button className={classes.button}>Features</Button>
      </div>
      <div>
        <Button className={classes.start} onClick={props.login}>
          Log In
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
