import React from "react";
import { Card, CardItem, Title, SubTitle } from "./styles";
import moment from "moment";

const WeatherCard = ({ weather }) => {
  return (
    <Card>
      <CardItem>
        <Title>City Name: {weather.name}</Title>
        <SubTitle>Day: {moment().format("dddd")}</SubTitle>
        <SubTitle>Date: {moment().format("LL")}</SubTitle>
        <SubTitle>Temprature: {weather.main.temp}</SubTitle>
        <SubTitle>Sunrise: {weather.sys.sunrise}</SubTitle>
        <SubTitle>Sunset: {weather.sys.sunset}</SubTitle>
        <SubTitle>Description: {weather.weather[0].description}</SubTitle>
        <SubTitle>Humidity: {weather.main.humidity} %</SubTitle>
      </CardItem>
    </Card>
  );
};

export default WeatherCard;
