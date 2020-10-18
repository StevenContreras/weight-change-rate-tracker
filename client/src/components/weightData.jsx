import React, { useState }  from "react";

function WeightData({ handleLogin }) {
  const [weight, setWeight] = useState('')

  function submitWeight() {
    console.log(typeof weight);
  }

  function handleChange(e) {
    const value = Number(e.target.value);
    setWeight(value);
    console.log(value, weight)
  }

  return (
    <main>
      <h4>Weight Data</h4> 
      <button type="button" onClick={() => handleLogin("0")}>Logout</button>
      <form>
        <label>
          Add Weight:
          <input 
            name="weight" 
            type="number"
            value={weight}
            onChange={handleChange} 
          />
        </label>
        <button type="button" onClick={submitWeight}>Submit</button>
      </form>
    </main>
  )
}

export default WeightData;