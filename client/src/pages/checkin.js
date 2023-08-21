export default function Checkin({setTitle}){
  setTitle('Check-In Page');
  return (<>
  <h1 className="title">SyncShift</h1>
  <h3 className="headline">Shifting Management Tools</h3>

  <div className="check-in">
    <center>
    <button onClick={() => {window.location.href='/checkin'}} className="button1" style={{width: "101%"}}>Check-In</button>
    <br />
     <button onClick={() => {window.location.href='/checkout'}}  className="button2" style={{width: "101%"}}>Check-Out</button>
    <br />
    <button onClick={() => {window.location.href='/worklog'}} className="button3" style={{width: "101%"}}>WorkLog</button>
    <br />
    <button onClick={() => {window.location.href='/settings'}} className="button4" style={{width: "101%"}}>Settings</button>
    </center>
  </div>
  <center>
    <button className="button button5">Check In</button>
  </center>
  </>)
}
