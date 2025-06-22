import './CreateSchedulePage.css';
import Logs from '../components/create-schedule/Logs'
import ScheduleTable from '../components/create-schedule/ScheduleTable';
import CreateSchedule from '../components/create-schedule/CreateSchedule';

function CreateSchedulePage() {
  return (
    <>
      <div className="container">
        <CreateSchedule />
        <div className="schedule-table-container">
          <ScheduleTable />
          <Logs />
        </div>
      </div>
    </>
  );
}

export default CreateSchedulePage;