import React, { useState } from 'react';

//  importing children
import AddModal from '../layout/AddModal';
import CreateModal from '../layout/CreateModal';

//  importing utils
import Card from '../UI/Card';
import NavBar from './navbar/NavBar';

//  importing styles
import classes from './PostLogin.module.scss';

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
        createTask={() => {
          setCreate(true);
        }}
        addUser={() => {
          setAdd(true);
        }}
      />
      <Card className={classes.card}></Card>
    </React.Fragment>
  );
};

export default PostLogin;
