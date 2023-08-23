export default function Login({setTitle}){
  setTitle('SyncShift Login');
  return(<>
    <h1 className="title">SyncShift</h1>
    <h3 className="headline">Shifting Management Tools</h3>
    <form>
      <div className="container">
        <div className="form_contents">
        <label>E-mail : </label>
        <input type="text" placeholder="Enter Username" name="username" required />
          
        <button className="login" onClick={() => {window.location.href='/checkin'}}>Send Link</button>

        <button onClick={() => {window.location.href='/newuser'}} className="b1">Create Account</button>

        <button onClick={() => {window.location.href='/index'}} className="b2">Login</button><br /><br />
        </div> 
      </div>
    </form>
    </>)
}
