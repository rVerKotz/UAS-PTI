import React, { useState, useEffect } from "react";
import data from "../data/EastJavaCard";
import Content from "./Card";
import axios from "axios"; 
import InfiniteMovingCards from "./MovingCard";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/City.css";
import "../styles/Styles.scss";

function City({ Food, Wallpaper, Culture, Index }) {
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${data[Index].title}&appid=397661306596abd06e01225cb59bafb3&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeather();
  }, []);

  function handleResize(index) {
    const imgElement = document.getElementById(`img${index}`);
    if (imgElement) {
      setImgDimensions(imgElement.getBoundingClientRect());
    }
  }

  useEffect(() => {
    function resizeHandler() {
      Wallpaper.forEach((_, index) => {
        handleResize(index);
      });
    }

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [Wallpaper]);

  useEffect(() => {
    Wallpaper.forEach((_, index) => {
      handleResize(index);
    });
  }, [Wallpaper]);

  const buttonStyle = {
    position: "absolute",
    top: `calc(imgDimensions.height / 2 + 80)px`,
    marginRight: 10,
    transform: "translateY(-50%)",
    width: "30px",
    border: "0px",
    background: "none",
    zIndex: 5
  };

  const headerStyle = {
    position: "absolute",
    top: imgDimensions.height / 3,
    textShadow: "3px 2px 0px #000000",
    transform: "translateY(-50%)",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <img alt="left" src="/image/left.png" style={{ width: `30px` }} />
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <img alt="right" src="/image/right.png" style={{ width: `30px` }} />
      </button>
    ),
  };

  return (
    <div className="Body">
      <Fade {...properties} duration={5000}>
        {Wallpaper.map((image, index) => (
          <div className="each-slide" key={index}>
            <div className="pickgradient">
              <img
                id={`img${index}`}
                alt={image.title}
                src={image.img}
                onLoad={() => handleResize(index)}
              />
            </div>
            <span style={headerStyle}>
              <h1>{image.title}</h1>
              <p>{image.body}</p>
            </span>
          </div>
        ))}
      </Fade>
      <div className="Content" style={{boxShadow: '10px 10px 5px -2px rgba(0, 0, 0, 0.75)', border: '1px solid black'}}>
      <h1>{data[Index].title}</h1>
      <p>{data[Index].description}</p>
      {weather && (
          <div className="Weather">
            <h2>Current Weather in East Java</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
      <div className="Cards">
        {Food.map((food, index) => (
          <Content key={index} {...food} />
        ))}
      </div>
      <InfiniteMovingCards Culture={Culture} />
    </div>
  );
}

export default City;