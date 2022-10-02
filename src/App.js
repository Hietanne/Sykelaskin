import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);
  const [upper, setUpper] = useState(0);
  const [lower, setLower] = useState(0);

  function calculate() {
    setUpper((220 - age) * 0.85);
    setLower((220 - age) * 0.65);
  }

  return (
    <div class="container">
      <form>
        <h1>Sykerajojen laskin</h1>
        <label for="age">Ikä</label><br />
        <input type="number" value={age} onChange={e => setAge(e.target.value)} class="laatikko"/><br /><br />
        <label for="limit">Sykeraja</label><br />
        <output type="text" class="laatikko">{lower}<label> - </label>{upper}</output><br /><br />
        <button type="button" onClick={calculate} class="laatikko">Laske!</button>
        </form>
    </div>
  );
}

export default App;
