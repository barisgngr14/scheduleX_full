import "./CreateSchedule.css"

function CreateSchedule(){
    return(
        <div className="create-schedule">
            <h1>Create Schedule</h1>
            <p>Create a new schedule according to constraints. When you click on the "Create Schedule" button, the algorithm will start working and the schedule will be created. This may take a while. If the algorithm cannot find a solution according to the constraints, it will return an error message.</p>
            <button>Review Constraints</button>
            <p><b>PRO TIP:</b> If the algorithm cannot find a solution according to the constraints, try to change the constraints that cause the problem in the "Logs" section.</p>
            <button id="create-schedule-button">CREATE SCHEDULE</button>
        </div>
    );
}

export default CreateSchedule;