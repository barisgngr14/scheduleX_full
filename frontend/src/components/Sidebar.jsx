import './Sidebar.css';

function Sidebar({ activeTab, onTabChange }) {
    return (
      <>
        <h1>Constraints</h1>
        <ul className='sidebar-list'>
          <li><a href="/" onClick={() => onTabChange('class')}>Class Constraints</a></li>
          <li><a href="/" onClick={() => onTabChange('term')}>Term Constraints</a></li>
          <li><a href="/" onClick={() => onTabChange('instructor')}>Instructor Constraints</a></li>
          <li><a href="/" onClick={() => onTabChange('room')}>Room Constraints</a></li>
        </ul>
      </>
    );
  }
  
  export default Sidebar;
  