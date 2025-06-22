import React from 'react';
import './LoginForm.css';

function LoginForm({ showLoginForm, onBack }) {
  return (
    
    <>
    
    <div className={`user-login-form ${showLoginForm ? 'slide-in' : ''}`}>
        <button className="back-button" onClick={onBack}><i className="fas fa-arrow-left"></i></button>
        <h1>Login</h1>
        <form id="login-form" action="">
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button>Login</button>
        </form>
    </div>
    
    </>
    
    

  );
}

export default LoginForm;