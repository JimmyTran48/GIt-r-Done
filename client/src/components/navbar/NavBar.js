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
        <Button className={classes.button}>Log In</Button>
        <Button className={classes.start}>Get Started</Button>
      </div>
    </nav>
  );
};

export default NavBar;
