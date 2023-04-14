import React from 'react';

import './App.css';
import { Approvider } from './providers/app';
import { AppRoutes } from './routes';

function App() {
  return (
    <Approvider>
      <AppRoutes />
    </Approvider>
  );
}

export default App;
