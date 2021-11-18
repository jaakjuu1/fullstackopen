import React, { useState, useEffect } from "react";
import axios from "axios";
const apikey = process.env.REACT_APP_API_KEY;

const Weather = ( {capital} ) => {
  const [climate, setClimate] = useState();

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${capital[0]}&aqi=no`
      )
      .then((res) => {
        console.log(res)
        const data = res.data;
        console.log(data);
        setClimate(data);
      });
  }, [capital]);

  console.log(capital, climate)

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>Temprature: {climate?.current?.temp_c}</p>
      <img src={climate?.current?.condition?.icon} alt={capital} />
      <p>Wind: {climate?.current?.wind_kph} km/h <strong>direction: </strong> {climate?.current?.wind_dir}</p>
    </div>
  );
};

export default Weather;
