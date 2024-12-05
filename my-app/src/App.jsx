import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import Login from './Components/login/login';
import PrivateRoute from './Components/login/PrivateRoute';

const App = () => {
  return (
    <div>
      <Routes>
        {/* Route đăng nhập */}
        <Route path="/login" element={<Login />} />

        {/* Route chính chứa Layout */}
        <Route path="/" element={<Layout />}>

        </Route>
      </Routes>
    </div>
  );
};

export default App;
