import React from 'react';
import './ConstraintList.css'; // stil dosyası istersen

function InstructorConstraintList() {
  const instructors = [
    { name: 'Doç. Dr. Rukiye Savran Kızıltepe', icon: '/teacher.png' },
    { name: 'Doç Dr. Murat Karakuş', icon: '/teacher.png' },
    { name: 'Doç. Dr. Damla Topallı', icon: '/teacher.png' },
  ];

  return (
    <div className="instructor-constraints">
      <ul>
        {instructors.map((instructor, index) => (
          <li key={index}>
            <img src={instructor.icon} alt={`${instructor.name} icon`} />
            <span>{instructor.name}</span>
            <button className="expand-button">
              <i className="fas fa-chevron-down"></i>
            </button>
          </li>
        ))}
      </ul>

      <button className="add-instructor add-button">+ Add New Instructor</button>
    </div>
  );
}

export default InstructorConstraintList;
