import React from 'react';
import './ConstraintList.css';

function TermConstraintList() {
  const terms = [
    { name: 'Term 1', icon: '/i-Photoroom.png' },
    { name: 'Term 2', icon: '/i-Photoroom.png' },
    { name: 'Term 3', icon: '/i-Photoroom.png' },
  ];

  return (
    <div className="term-constraints">
      <ul>
        {terms.map((term, index) => (
          <li key={index}>
            <img src={term.icon} alt={`${term.name} icon`} />
            <span>{term.name}</span>
            <button className="expand-button">
              <i className="fas fa-chevron-down"></i>
            </button>
          </li>
        ))}
      </ul>

      <button className="add-term add-button">+ Add New Term</button>
    </div>
  );
}

export default TermConstraintList;

