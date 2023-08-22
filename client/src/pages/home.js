import {useCookies} from 'react-cookie';

export default function Home({setTitle, appAcc}){
  const [user, setUser] = useCookies(['user']);
  setTitle('SyncShift Login');

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value.trim();
    const pass = e.target[1].value.trim();

    appAcc.createEmailSession(email, pass).then((er) => {
      console.log(er);
      setUser('name', JSON.stringify(er))
      window.location.href = '/checkin';
    });
    
  };
   const lemao = () => {
     if(Object.entries(user).length > 0){
       return window.location.href = '/checkin'
     }
   }

   lemao();
  return (<> 
    <h1 className="title">SyncShift</h1>
    <h3 className="headline">Shifting Management Tools</h3>
    <form onSubmit={handleSubmit} >
      <div className="container">
        <div className="form_contents">
        <label>Username : </label>
        <input type="text" placeholder="Enter Username" name="username" required />
        
        <label>Password : </label>
        <input type="password" placeholder="Enter Password" name="password" required />
        
        <button className="login">Login</button>
        
        <input className="remember" type="checkbox" checked="checked" placeholder="Remember me" /><br />

        <button onClick={() => {window.location.href='/newuser'}} className="b1">Create Account</button>

        <button onClick={() => {window.location.href='/forgotpw'}} className="b2">Forgot Password</button><br /><br />
        </div> 
      </div>
    </form>
  </>);
}
