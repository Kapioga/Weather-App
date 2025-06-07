import React from 'react';
import './App.css';

const api = {
  key: "7c1bb57b1c8a76bab5dc7c82c2c517be",
  base: "https://api.openweathermap.org/data"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input type='text' className='search-Bar' placeholder='Where to next? ...'></input>
        </div>

      </main>
    </div>
  );
}

export default App;
