export default function Setting({setTitle}){
  setTitle('Settings')
  return (<>
  <h1 className="title">SyncShift</h1>
  <h3 className="headline">Shifting Management Tools</h3>

  <div className="check-in">
    <center>
      <button onclick={() => {window.location.href='/checkin'}} className="button1" style={{width: "100%"}}>Check-In</button>
      <br />
      <button onclick={() => {window.location.href='/checkout'}} className="button2" style={{width: "100%"}}>Check-Out</button>
      <br />
      <button onclick={() => {window.location.href='/worklog'}} className="button3" style={{width: "100%"}}>Work Log</button>
      <br />
      <button onclick={() => {window.location.href='/settings'}} className="button4" style={{width: "100%"}}>Settings</button>
    </center>
  </div>
  <ul>
    <div className="settings_menu">
      <br />
      <button className="settings_button" onclick={() => {window.location.href='/myaccount'}}
        style={{position: "center", width: "90%"}}>My Account</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onclick={() => {window.location.href='/tos'}} className="settings_button"
        style="position:center;width:90%">Privacy & Security </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onclick={() => {window.location.href='/about'}} className="settings_button"
        style="position:center;width:90%">About Us</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onclick={() => {window.location.href='/'}} className="settings_button" style="position:center;width:90%">Log
        Out</button>
    </div>
  </ul>
  </>);
}
