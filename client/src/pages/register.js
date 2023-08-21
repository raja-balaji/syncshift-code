
export default function Register({setTitle}){
  setTitle('Create Account')
  return (<>
  <h1 className="title">SyncShift</h1>
  <h3 className="headline">Create Account</h3>

  <form action="action_page.php" style={{border:"1px solid #ccc"}}>
    <div className="contain">
      <h1>Create an Account</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
 
      <label htmlFor="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required />

      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />
  
      <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

      <label>
        <input type="checkbox" checked="checked" name="remember" style={{marginBottom:"15px"}} /> Remember me
      </label>
      <br />
      <p>By creating an account you agree to our <a href="/tos" style={{color:"dodgerblue"}} >Terms &
          Privacy</a>.</p>
  
      <div className="clearfix">
        <button type="submit" id="newAccB" className="signupbtn">Sign Up</button>
      </div>
      <br />
      <br />
    </div>
  </form>
  </>);
}
