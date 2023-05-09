import React, { useState } from 'react';

//  importing children
import NavBar from './src/components/navbar/NavBar';

//  importing utils
import LoginModal from './src/components/layout/LoginModal';

const App = () => {
  const [loggingIn, setLoggingIn] = useState(false);
  const [signuup, setSignup] = useState(false);
  return (
    <React.Fragment>
      {loggingIn && (
        <LoginModal
          onClose={() => {
            setLoggingIn(false);
          }}
        />
      )}
      <NavBar
        login={() => {
          setLoggingIn(true);
        }}
      />
    </React.Fragment>
  );
};

export default App;
