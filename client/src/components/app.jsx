import React, { useState }  from "react";
import Login from "./login.jsx";
import SignUp from "./signUp.jsx";
import WeightData from "./weightData.jsx";


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
        : login === 1 ? <WeightData handleLogin={handleLogin}></WeightData>
        : <SignUp handleLogin={handleLogin}></SignUp>
      } 
    </div>
  );
}

export default App;