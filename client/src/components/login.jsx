import React from "react";

function Login({ handleLogin, user, setUser }) {

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
      <h4>Member Login</h4>
      <form>
        <label>Email:
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}>
          </input>
        </label>
        <label>Password:
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}>
          </input>
        </label>
        <button type="button" onClick={() => handleLogin("1")} >Login</button>
      </form>
      <div>Not a member?
        <a type="button" onClick={() => handleLogin("2")}> Sign up!</a>      
      </div>
      <div>
        <a>Forgot password?</a>      
      </div>
    </main>
  )
}

export default Login;