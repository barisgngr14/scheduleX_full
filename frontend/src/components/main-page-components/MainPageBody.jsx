import React from 'react';
import './MainPageBody.css';

function MainPageBody({ onGetStarted, showChoosingSection }) {
  return (
    
    <div className={`container ${showChoosingSection ? 'slide-out' : ''}`}>
    <h1>Welcome to <span className="gradient-text">ScheduleX</span></h1>
    <p>ScheduleX is a web application that allows you to schedule your tasks and events.</p>
    <div className="main-buttons">
        <button onClick={onGetStarted}>Get Started</button>
        <button>Find Out More</button>
    </div>
    </div>

  );
}

export default MainPageBody;