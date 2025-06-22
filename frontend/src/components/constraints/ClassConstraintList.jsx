import React from 'react';
import './ConstraintList.css'; // İstersen stil dosyası ayırabilirsin
import booksIcon from '../../assets/books.png';
import computerIcon from '../../assets/computer.png';

function ClassConstraintList() {
  const constraints = [
    {
      code: 'YMH354',
      name: 'Web Tasarımı ve Programlama',
      icon: booksIcon,
    },
    {
      code: 'YMH415',
      name: 'Veri Yapıları',
      icon: booksIcon,
    },
    {
      code: 'YMH416',
      name: 'Veri Yapıları Laboratuvarı',
      icon: computerIcon,
    },
    {
      code: 'YMH340',
      name: 'Veri Madenciliği',
      icon: booksIcon,
    },
  ];

  return (
    <div className="class-constraints constraints">
      <ul>
        {constraints.map((item, index) => (
          <li key={index}>
            <img src={item.icon} alt={`${item.code} icon`} />
            <span>{item.code} - {item.name}</span>
            <button className="expand-button">
              <i className="fas fa-chevron-down"></i>
            </button>
          </li>
        ))}
      </ul>

      <button className="add-class add-button">+ Add New Class</button>
    </div>
  );
}

export default ClassConstraintList;
