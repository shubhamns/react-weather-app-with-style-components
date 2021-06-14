import React, { useState, useEffect } from "react";
import { Wrapper, H1, H6 } from "./styles";
import WeatherCard from "./../weatherCard";

const Weather = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMyAPI() {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      if ((lat, long)) {
        await fetch(
          `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        )
          .then((res) => res.json())
          .then((res) => {
            console.log("res=>>", res);
            setWeather(res);
            setIsLoading(false);
          })
          .catch((err) => {
            console.error("err=>", err);
            setIsLoading(false);
          });
      }
    }
    fetchMyAPI();
  }, [lat, long]);

  return (
    <Wrapper>
      <H1>Weather App</H1>
      {isLoading ? (
        <H6>Loading...</H6>
      ) : weather === "null" ? (
        <H6>No Data...</H6>
      ) : (
        <WeatherCard weather={weather} />
      )}
    </Wrapper>
  );
};

export default Weather;
