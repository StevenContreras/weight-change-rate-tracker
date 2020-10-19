import React, { useState }  from "react";
import Login from "./login.jsx";
import SignUp from "./signUp.jsx";
import WeightData from "./weightData.jsx";


function App() {
  const [login, setLogin] = useState(0);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  
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
        login === 0 ?  <Login 
            handleLogin={handleLogin}
            user={user}
            setUser={setUser}>
          </Login>
        : login === 1 ? <WeightData handleLogin={handleLogin}></WeightData>
        : <SignUp 
            handleLogin={handleLogin}
            user={user}
            setUser={setUser}>
          </SignUp>
      } 
    </div>
  );
}

export default App;