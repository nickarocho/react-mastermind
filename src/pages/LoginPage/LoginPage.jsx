import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

const LoginPage = (props) => {
  return (
    <div className='LoginPage'>
      <LoginForm
        history={props.history} // could have used spread operator
        handleLogin={props.handleLogin} />
    </div>
  );
};

export default LoginPage;