import React, { useState, useEffect } from "react";
import Content from "./Card";
import InfiniteMovingCards from "./MovingCard";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/City.css";
import "../styles/Styles.scss";

function City({ Food, Wallpaper, Culture }) {
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });

  function handleResize(index) {
    const imgElement = document.getElementById(`img${index}`);
    if (imgElement) {
      setImgDimensions(imgElement.getBoundingClientRect());
    }
  }

  useEffect(() => {
    function resizeHandler() {
      Wallpaper.forEach((image, index) => {
        handleResize(index);
      });
    }

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [Wallpaper]);

  useEffect(() => {
    Wallpaper.forEach((image, index) => {
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