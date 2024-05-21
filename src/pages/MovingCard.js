import React, { useRef, useEffect, useMemo, useContext } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { CountContext } from "../App"; 
import '../styles/CardSlider.css';

const InfiniteMovingCards = ({ Culture }) => {
  const { changeOverlay } = useContext(CountContext);
  const x = useMotionValue(0);
  const controlsRef = useRef(null);
  const duplicatedCards = useMemo(() => [...Culture, ...Culture], [Culture]);
  const cardWidth = `calc(${100 / Culture.length}% - ${2 * 10}px)`;

  useEffect(() => {
    let controls;

    if (window.innerWidth > 600) {
      controls = animate(x, [-window.innerWidth, 0], {
        ease: 'linear',
        duration: 10,
        repeat: Infinity,
        repeatType: 'loop',
      });
    }

    controlsRef.current = controls;

    return () => {
      if (controls) {
        controls.stop();
      }
    };
  }, [x]);

  const handleMouseEnter = () => {
    controlsRef.current?.pause();
  };

  const handleMouseLeave = () => {
    controlsRef.current?.play();
  };

  const getShortDescription = (description, maxHeight, lineHeight) => {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.visibility = 'hidden';
    div.style.height = 'auto';
    div.style.lineHeight = lineHeight;
    div.style.maxHeight = 'none';
    div.style.whiteSpace = 'normal';
    div.style.padding = '10px';
    div.style.boxSizing = 'border-box';
    div.innerText = description;
    document.body.appendChild(div);

    let text = description;
    while (div.clientHeight > maxHeight && text.length > 0) {
      text = text.slice(0, -1);
      div.innerText = text + '...';
    }

    document.body.removeChild(div);
    return div.innerText;
  };

  return (
    <div className="slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.div
        className="card-y-slider"
        style={window.innerWidth > 600 ? { x } : null}
      >
        {duplicatedCards.map((card, index) => (
          <div
            key={index}
            id={`card-${index}`}
            className="box"
            style={window.innerWidth < 600 ? null : { width: cardWidth }}
          >
            <img src={card.image} alt={card.description} className="card-image" />
            <p className="card-description">
              {window.innerWidth < 600 ? null : getShortDescription(card.description, 60, '1.2')}
            </p>
            <span onClick={() => changeOverlay(card.title, card.image, card.description)} className="read-more">Read More</span>
          </div>
        ))}
      </motion.div>
      <div className="fade"></div>
    </div>
  );
};

export default InfiniteMovingCards;
