import React from 'react';

const Weather = (props) => {
  return (
    <div className="weather-container">
      {props.city && props.forecast && (
            

        <div>
          <h2>Weather Forecast for {props.city}</h2>
          {props.forecast.map((day, index) => (
            
            <div key={index} className="weather-day">
              <p>{day.dayOfWeek} ({day.date})</p>
              <p> {day.description}</p>
              
            </div>
          ))}
          
        </div>
      )}
    </div>
  );
};


export default Weather;
