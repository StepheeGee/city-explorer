import React from 'react';

const Weather = (props) => {
  return (
    <div className="weather-container">
      {props.forecast.length > 0 && (
        <div>
          <h2>Weather Forecast for {props.city}</h2>
          {props.forecast.map((day, index) => (
            <div key={index} className="weather-day">
              <p>Date: {day.date}</p>
              <p>Description: {day.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Weather;
