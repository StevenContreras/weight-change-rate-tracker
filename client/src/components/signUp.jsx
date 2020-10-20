import React from "react";

function SignUp({ handleLogin, user, setUser }) {
  
  function handleChange(e) {
    console.log(e.target.value)
    const entry = e.target.value
    const name = e.target.name
    setUser({
      ...user,
      [name]: entry
    });
  }

  return (
    <main>
      <h4>Your Account Information</h4>
      <form>
        <label>Email:
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}>
          </input>
        </label>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}>
        </input>
        <button>Continue</button>
      </form>
      <div>Already a member?
        <a type="button" onClick={() => handleLogin("0")}> Login</a>      
      </div>
      <div>
        <a>Forgot password?</a>      
      </div>
    </main>
  )
}

export default SignUp;