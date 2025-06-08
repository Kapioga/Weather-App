import React, { useState } from 'react';
import './App.css';

const api = {
  key: "7c1bb57b1c8a76bab5dc7c82c2c517be",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  
  // Fetch and get request from weather API
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setQuery('');
          setWeather(result);
          console.log(result);
        });
    }
  }

  // Date and Clock 
  const date = new Date();
  let ampm = (date.getHours() >=12) ? "PM" : "AM" ;
  const clockTime = date.getHours() + ":" + date.getMinutes();

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
    <div className={
      (typeof weather.main != "undefined") ? 
      ((weather.main.temp > 16) ? 'App warm' : 'App') 
      : 'App'
      }>

      <main>

        {/* Search Box  */}
        <div className='search-box'>
          <input type='text' 
          className='search-Bar' 
          placeholder='Where to next? ...'
          onChange={e => setQuery(e.target.value)}
          value = {query}
          onKeyDown={search}
          ></input>
        </div>

        {/* Weather Components  */}
        {(typeof weather.main != "undefined") ? (
        <div>

          {/* Weather Location and Date  */}
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          
          {/* Weather Readings and Type */}
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c | {Math.round((weather.main.temp)*9/5)+32}°f
            </div>
          <div className="weather">{weather.weather[0].main}</div>

          </div>
        </div>
        ) : ('')}

        <div className='clock'>
          <h1> {clockTime}</h1> <h2 className='daytime'>{ampm}</h2>
        </div>
      </main>
    </div>
  );
}

export default App;
