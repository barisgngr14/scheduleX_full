
import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <>
    
    <div id="about" className="about-section">
        <h1>About Schedule<span className="gradient-text">X</span></h1>
        <div className="about-content">
            <p>ScheduleX is a web application that allows you to schedule your tasks and events. It is a simple and easy to use application that allows you to schedule your tasks and events. Back then, all scheduling was done on paper. But now, we have ScheduleX to make your life easier. Only with one tap, you can schedule your tasks and events.It's actutally have been the most useful interface for especcially universities, even in companies. No need manual entry, just one tap and you can schedule your tasks and events. </p>
            <p>With ScheduleX's intuitive interface, you can easily manage your daily schedule, set reminders for important meetings, and organize your tasks efficiently. Our smart notification system ensures you never miss an important deadline or appointment. Whether you're a student managing classes, a professional coordinating meetings, or someone looking to better organize their time, ScheduleX is the perfect solution for all your scheduling needs.</p>
        </div>

        <div className="quote">
            <p>"Automation applied to an inefficient operation will magnify the inefficiency."</p>
            <p>-Bill Gates, CEO of Microsoft</p>
        </div>
    </div>
    
    </>
    

  );
}

export default AboutSection;