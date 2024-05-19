import React, { useContext } from "react";
import { CountContext } from "../App"; 
import "../styles/Card.css";

function Card({ title, image, description }) {
  const { changeOverlay } = useContext(CountContext);

  return (
      <div className="Card" onClick={() => changeOverlay(title, image, description)}>
          <img src={image} alt={title} className="image" style={{ width: '100%', objectFit: 'cover', aspectRatio: 16/9 }} />
          <h2 className="title">{title}</h2>
      </div>
  );
}

export default Card;
