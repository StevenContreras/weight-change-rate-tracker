import React from "react";

function Login({ handleLogin }) {

  return (
    <main>
      <h4>Member Login</h4>
      <form>
        <label>Email Address:</label>
        <input></input>
        <label>Password:</label>
        <input></input>
        <button type="button" onClick={() => handleLogin("2")} >Log In</button>
      </form>
      <div>
        <a>Forgot password?</a>      
      </div>
      <div>Not a member?
        <a type="button" onClick={() => handleLogin("1")}> Sign up!</a>      
      </div>
    </main>
  )
}

export default Login;