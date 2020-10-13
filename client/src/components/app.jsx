import React, { useState }  from "react";
import Login from "./login.jsx"
import SignUp from "./signUp.jsx"

function App() {
  const [login, setLogin] = useState(0)
  
  function handleLogin(e) {
    setLogin(e);
  }

  return (
    <div>
      <header>
        <h1>Slim Well</h1>
      </header>
      { 
        login === 0 
        ?  <Login></Login>
        : <SignUp></SignUp>
      } 
    </div>
  )
}

export default App;