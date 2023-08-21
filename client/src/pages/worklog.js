import './worklog.css'
export default function worklog({setTitle}){
  setTitle('SyncShift WorkLog');
  return (<>
  <h1 className="title">SyncShift</h1>
  <h3 className="headline">Shifting Management Tools</h3>
  <div className="check-in">
    <center>
    <button onClick={() => {window.location.href='/checkin'}} className="button1" style={{width: '101%'}}>Check-In</button>
    <br />
     <button onClick={() => {window.location.href='/checkout'}} className="button2" style={{width: "101%"}}>Check-Out</button>
    <br />
    <button onClick={() => {window.location.href='/worklog'}} className="button3" style={{width: "101%"}}>WorkLog</button>
    <br />
    <button onClick={() => {window.location.href='/settings'}} className="button4" style={{width: "101%"}}>Settings</button>
    </center>
</div>


<table style={{width:"60%", marginLeft:"auto", marginRight:"auto"}}>
  <center>
  <tr>
    <th>Label</th>
    <th>Start Time:</th>
    <th>End Time:</th>
    <th>Time Spent:</th>
  </tr>
  <tr>
    <td>Gym</td>
    <td>9:30</td>
    <td>11:15</td>
    <td>1hr 45mins</td>
  </tr>
  <tr>
    <td>Prag Scrum and Editing</td>
    <td>12:00</td>
    <td>1:00</td>
    <td>1hr</td>
  </tr>
  <tr>
    <td>Reading SAT Prep</td>
    <td>1:30</td>
    <td>2:30</td>
    <td>1hr</td>
  </tr>
  </center>
</table>
</>)
}
