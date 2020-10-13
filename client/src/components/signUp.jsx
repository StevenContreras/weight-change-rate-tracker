import React from "react";

function SignUp() {

  return (
    <main>
      <h4>Your Account Information</h4>
      <form>
        <label>Email Address:</label>
        <input></input>
        <label>Password:</label>
        <input></input>
        <button>Continue</button>
      </form>
      <div>Already a member?
        <a> Log In</a>      
      </div>
      <div>
        <a>Forgot password?</a>      
      </div>
    </main>
  )
}

export default SignUp;