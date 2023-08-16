import React from 'react'
import './WeatherApp.css'
import search_icon from "../Assets/search_icon.png"
import WeatherIcon from "../Assets/cloud.png"
import HumidityIcon from "../Assets/humidity.png"
import WindIcon from "../Assets/wind.png"


function WeatherApp() {

    let api_key = "fcddc946cd94e7af9f31cddbddddde5c";

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value === "")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = data.wind.speed + " Km/h";
        temperature[0].innerHTML = data.main.temp + " °C";
        location[0].innerHTML = data.name;
    }

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className='cityInput' placeholder='Search'/>
            <div className="search-icon" onClick={() => {search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={WeatherIcon} alt="" />
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={HumidityIcon} alt="" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={WindIcon} alt="" />
                <div className="data">
                    <div className="wind-rate">64%</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp