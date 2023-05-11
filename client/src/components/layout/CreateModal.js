import React from 'react';

//  importing children
import CreateForm from '../forms/CreateForm';
//  importing utils
import Modal from '../UI/Modal';

const CreateModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <CreateForm
        onClose={props.onClose}
        users={props.users}
        create={props.create}
        updateUsers={props.updateUsers}
      />
    </Modal>
  );
};

export default CreateModal;
