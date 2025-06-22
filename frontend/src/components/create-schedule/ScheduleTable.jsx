import "./ScheduleTable.css";

function ScheduleTable() {
    return(
        <div className="schedule-table-content">
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>08:00</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>08:30</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>09:00</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>09:30</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>10:00</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>10:30</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>11:00</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>11:30</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>12:00</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>13:30</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>14:00</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>14:30</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>15:00</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>15:30</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>16:00</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>16:30</td><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td>17:00</td><td></td><td></td><td></td><td></td><td></td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default ScheduleTable