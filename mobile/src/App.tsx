import React from 'react';

import {Routes} from './routes';
import {AuthProvider} from './shared/context/AuthContext';

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};

export default App;
