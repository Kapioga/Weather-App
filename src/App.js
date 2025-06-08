import React, { useState } from 'react';
import './App.css';

const api = {
  key: "7c1bb57b1c8a76bab5dc7c82c2c517be",
  base: "https://api.openweathermap.org/data"
}

function App() {
  
  // Fetch and get request from weather API
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query} &units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => setWeather(result));
    }
  }

  // Date Handler 
  const dateBuilder = (d) => {
    let months = ["January" , "February" ,"March" , "April" ,"May" , "June" ,"July" , "August" ,"September" , "October" ,"November" , "December" ] ;
    let days = ["Sunday", "Monday","Tuesday", "Wednesday","Thursday", "Friday","Saturday" ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} , ${month} ${date} ${year}`

  }
  return (
    <div className="App">
      <main>

        {/* Search Box  */}
        <div className='search-box'>
          <input type='text' className='search-Bar' placeholder='Where to next? ...'></input>
        </div>

        {/* Location and Date  */}
        <div className='location-box'> 
          <div className='location'> Naples, Italy</div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>

        {/* Weather temperature  */}
        <div className='weather-box'>
          <div className='temp'> 85°C</div>
          <div className='weather'> Partly Cloud</div>
        </div>

      </main>
    </div>
  );
}

export default App;
