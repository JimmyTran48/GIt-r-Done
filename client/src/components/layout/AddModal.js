import React from 'react';

//  importing children
import AddForm from '../forms/AddForm';
//  importing utils
import Modal from '../UI/Modal';

const AddModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <AddForm />
    </Modal>
  );
};

export default AddModal;
