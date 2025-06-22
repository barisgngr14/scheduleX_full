import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ConstraintDetails from '../components/ConstraintDetails';
import './ConstraintsPage.css';

function ConstraintsPage() {
  const [activeTab, setActiveTab] = useState('class');

  return (
    <div className="container">
      <div className="left-container">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <div className="right-container">
        <ConstraintDetails activeTab={activeTab} />
      </div>
    </div>
  );
}

export default ConstraintsPage;
