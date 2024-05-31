import React, { useState, useEffect, useRef } from "react";
import axios from "axios"; 
import image from "../data/EastJavaCard";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/Home.css";

function Home() {
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });
  const headerImageRef = useRef(null);
  const [weather, setWeather] = useState(null);

  const handleResize = () => {
    if (headerImageRef.current) {
      const { width, height } = headerImageRef.current.getBoundingClientRect();
      setImgDimensions({ width, height });
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    return () =>  {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    }
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Surabaya&appid=397661306596abd06e01225cb59bafb3&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeather();
  }, []);

  const descriptionImageStyle = {
    position: "absolute",
    top: `calc(${Math.min(imgDimensions.height, 550)}px - 80px)`,
    right: "20px",
    color: "white",
    fontSize: "clamp(1rem, 2.5vw, 4rem)",
    transition: "top 1s ease-in-out"
  };

  const headerImageStyle = {
    position: "absolute",
    top: `calc(${Math.min(imgDimensions.height, 600)}px - 60px)`,
    right: "20px",
    color: "white",
    fontSize: "clamp(2rem, 5vw, 4rem)",
    transition: "top 1s ease-in-out"
  };
  console.table(imgDimensions);
  return (
    <>
      <div className="Header">
        <div className="header-image-wrapper">
          <img
            ref={headerImageRef}
            alt="wallpaper"
            src={`${process.env.PUBLIC_URL}/image/wallpaper.jpg`}
            className="header-image"
          />
        </div>
        <p style={descriptionImageStyle}>ꦙꦮꦶꦮꦺꦠꦤ꧀</p>
        <h1 className="title" style={headerImageStyle}>
          East Java
        </h1>
      </div>
      <div className="Content">
        <h2>Description</h2>
        <p>
          Province located in the eastern part of Java Island, Indonesia. The
          capital city is Surabaya. The area covers 48,033 km², with a
          population of 41,149,974 people (as of 2022) and a population density
          of 857 people/km². Almost a quarter of the population of East Java
          resides in the metropolitan area of Surabaya.
        </p>
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
      <Slide duration={5000}>
        {image.map((card, index) => (
          <div key={index} className="each-slide-effect">
            <div className="slide-content">
              <img
                src={`${process.env.PUBLIC_URL}${card.image}`}
                alt={`Slide ${index + 1}`}
                className="slide-image"
              />
              <div className="text-content">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <Link to={`/city/${index}`}  style={{textDecoration: 'underline', color: 'blue', fontSize: '15px'}}>Read More→</Link>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </>
  );
}

export default Home;