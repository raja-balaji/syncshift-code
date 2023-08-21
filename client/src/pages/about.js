
export default function About({setTitle}){
  setTitle('About Page');
  return (<>
  <h1 className="title">SyncShift</h1>
  <h3 className="headline">Shifting Management Tools</h3>
  
  <div className="container">
    <div className="logo">
      <img src="/logo.png" alt="Logo" />
    </div>
    <div className="content">
      <h1>About Us</h1>
      <p>Syncshift is a productivity tool app that is mean't for people who are willing to escalate their skill stack by
        keeping track of when they check-in and check-out.They can do so by clickin the check-in and check-out button
        when prompted. This app will then show you the time period you have spent from when you first check-in till you
        check-out, which will definately help you keep track of the time you spend on a specific task.</p><br />
      <h1>Reach us at: Contact@syncshift.com</h1>
    </div>
  </div>
    <br />
  <br />
  <br />
  <center><button onclick={() => {window.location.href = '/settings'}} className="button3" style={{width: '30%'}}>Back</button></center>
  </>)
}
