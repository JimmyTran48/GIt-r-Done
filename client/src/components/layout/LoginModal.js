import React from 'react';

//  importing children
import LoginForm from '../forms/LoginForm';
//  importing utils
import Modal from '../UI/Modal';

const LoginModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
