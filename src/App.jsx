import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import CityForm from './components/CityForm';
import Map from './components/Map';
import ErrorComponent from './components/Error';
import Weather from './components/Weather';

const API_KEY = import.meta.env.VITE_API_KEY;

const VITE_API_SERVER = import.meta.env.VITE_API_SERVER;
function App() {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [forecast, setForecast] = useState(null);


  const [searchQuery, setSearchQuery] = useState('')


  const updateCity = (e) => {
    console.log(e)

    setSearchQuery(e.target.value);
  };


  async function fetchWeatherData(lat, lon) {
    try {
      const response = await axios.get(`${VITE_API_SERVER}/weather`, {
        params: {


          searchQuery: searchQuery,
          latitude: lat,
          longitude: lon,

        },
      });

      console.log("Weather Response", response)

      setForecast(response.data);
      // setShowWeather(true);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }


  async function getLocation() {

    const url = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
    console.log(url)
    try {
      const response = await axios.get(url);
      if (response.data && response.data.length > 0) {

        setCity(response.data[0].display_name);
        setLatitude(response.data[0].lat);
        setLongitude(response.data[0].lon);
        setErrorMessage('');


        fetchWeatherData(response.data[0].lat, response.data[0].lon);
      } else {
        setErrorMessage(`No location found for '${searchQuery}'. Please try a different location.`);
      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage(`We're having trouble finding that location. Please try again.`);
    }
  }


  return (
    <div className="app-container">
      <Header />
      {errorMessage && <ErrorComponent message={errorMessage} />}
      <div className="form-container">

        <CityForm updateCity={updateCity} city={city} handleGetLocation={getLocation} />
        {latitude && longitude && <Map latitude={latitude} longitude={longitude} city={city} />}

        {forecast && <Weather forecast={forecast} city={city} />}
        <Footer />
      </div>
    </div>
  );
}

export default App;

