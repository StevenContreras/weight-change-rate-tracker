import React, { useState }  from "react";
import Login from "./login.jsx"
import SignUp from "./signUp.jsx"

function App() {
  const [login, setLogin] = useState(0)
  
  function handleLogin(e) {
    let num = parseInt(e)
    console.log(typeof num, num)
    setLogin(num);
  }

  return (
    <div>
      <header>
        <h1>Slim Well</h1>
      </header>
      { 
        login === 0 ?  <Login handleLogin={handleLogin}></Login>
        : login === 1 ? <SignUp handleLogin={handleLogin}></SignUp>
        : <div>Profile</div>
      } 
    </div>
  );
}

export default App;