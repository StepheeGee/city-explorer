import React, { useState } from 'react';

const Weather = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="weather-container">
      {props.city && props.forecast && (
        <div>
          <h2 className="results-text">Weather Forecast for {props.city}</h2>
          <div className="accordion">
            {props.forecast.map((day, index) => (
              <div key={index} className="accordion-item">
                <div
                  className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{day.dayOfWeek} ({day.date})</span>
                </div>
                {activeIndex === index && (
                  <div className="accordion-content">
                    <p>{day.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
