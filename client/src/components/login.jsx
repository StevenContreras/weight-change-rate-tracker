import React from "react";

function Login() {

  return (
    <main>
      <h4>Member Login</h4>
      <form>
        <label>Email Address:</label>
        <input></input>
        <label>Password:</label>
        <input></input>
        <button>Log In</button>
      </form>
      <div>
        <a>Forgot password</a>      
      </div>
      <div>Not a member?
        <a> Sign up!</a>      
      </div>
    </main>
  )
}

export default Login;