import ClassConstraintList from './constraints/ClassConstraintList';
import TermConstraintList from './constraints/TermConstraintList';
import InstructorConstraintList from './constraints/InstructorConstraintList';
import RoomConstraintList from './constraints/RoomConstraintList';
import './ConstraintDetails.css';

function ConstraintDetails({ activeTab }) {
  switch (activeTab) {
    case 'class':
      return <ClassConstraintList />;
    case 'term':
      return <TermConstraintList />;
    case 'instructor':
      return <InstructorConstraintList />;
    case 'room':
      return <RoomConstraintList />;
    default:
      return null;
  }
}

export default ConstraintDetails;
