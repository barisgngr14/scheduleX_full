import React from 'react';
import './ChoosingSection.css';

function ChoosingSection({ showChoosingSection, onRegister, onLoginUser, showRegisterForm, showLoginForm }) {
  return (
    
    <>
    
    <div className={`choosing-section ${showChoosingSection ? 'slide-in' : ''} ${showRegisterForm ? 'slide-out' : ''} ${showLoginForm ? 'slide-out' : ''}`}> 
        <div className="login-button">
            <button>Login as an Administrator</button>
            <button onClick={onLoginUser}>Login as a User</button>
        </div>
        <span>or</span>
        <div className="register-button">
            <button onClick={onRegister}>Register</button>
        </div>
    </div>
    
    </>

  );
}

export default ChoosingSection;