import React from 'react';

//  importing children
import CreateForm from '../forms/CreateForm';
//  importing utils
import Modal from '../UI/Modal';
//  importing styles
import classes from './CreateModal.module.scss';

const CreateModal = (props) => {
  return (
    <Modal onClose={props.onClose} className={classes.modal}>
      <CreateForm />
    </Modal>
  );
};

export default CreateModal;
