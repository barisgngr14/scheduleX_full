import React from 'react';
import './ConstraintList.css'; // varsa stil dosyan burada

function RoomConstraintList() {
  const rooms = [
    { name: 'M101', icon: '/door-Photoroom.png' },
    { name: 'Derslik 6', icon: '/door-Photoroom.png' },
    { name: 'Derslik 7', icon: '/door-Photoroom.png' },
  ];

  return (
    <div className="room-constraints">
      <ul>
        {rooms.map((room, index) => (
          <li key={index}>
            <img src={room.icon} alt={`${room.name} icon`} />
            <span>{room.name}</span>
            <button className="expand-button">
              <i className="fas fa-chevron-down"></i>
            </button>
          </li>
        ))}
      </ul>

      <button className="add-room add-button">+ Add New Room</button>
    </div>
  );
}

export default RoomConstraintList;
