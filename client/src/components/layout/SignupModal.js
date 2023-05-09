import React from 'react';

//  importing children
import SignupForm from '../forms/SignupForm';
//  importing utils
import Modal from '../UI/Modal';

const SignupModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <SignupForm />
    </Modal>
  );
};

export default SignupModal;
