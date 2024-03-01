import React from 'react';
import styles from './Login.module.css';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginRegister from './LoginRegister';
const Login = () => {
  return (
    <div className={styles.Login}>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<LoginRegister />} />
      </Routes>
    </div>
  );
};

export default Login;
