export default function Home({setTitle}){
  setTitle('SyncShift Login');
  return (<> 
    <h1 className="title">SyncShift</h1>
    <h3 className="headline">Shifting Management Tools</h3>
    <form>
      <div className="container">
        <div className="form_contents">
        <label>Username : </label>
        <input type="text" placeholder="Enter Username" name="username" required />
        
        <label>Password : </label>
        <input type="password" placeholder="Enter Password" name="password" required />
        
        <button className="login" onClick={() => {window.location.href='/checkin'}}>Login</button>
        
        <input className="remember" type="checkbox" checked="checked" placeholder="Remember me" /><br />

        <button onClick={() => {window.location.href='/newuser'}} className="b1">Create Account</button>

        <button onClick={() => {window.location.href='/forgotpw'}} className="b2">Forgot Password</button><br /><br />
        </div> 
      </div>
    </form>
  </>);
}
