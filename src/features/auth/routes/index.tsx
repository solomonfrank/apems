import { Routes, Route } from 'react-router-dom';

import { Login } from './Login';

export const AuthRoute = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};
