import React from 'react';
import styles from './Login.module.css';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
const Login = () => {
  return (
    <div className={styles.Login}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default Login;
