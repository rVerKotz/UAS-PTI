import React, { useState, useRef, useLayoutEffect, useEffect, useMemo } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import '../styles/CardSlider.css';

const InfiniteMovingCards = ({ Culture }) => {
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(window.innerHeight);
  const controlsRef = useRef(null);
  const fade = useRef(null);
  const duplicatedCards = useMemo(() => [...Culture, ...Culture], [Culture]);
  const cardWidth = `calc(${100 / Culture.length}% - ${2 * 10}px)`;
  const cardHeight = `calc(${100 / Culture.length}% - ${2 * 10}px)`;

  useLayoutEffect(() => {
    const handleResize = () => {
      if (fade.current) {
        const { width, height } = fade.current.getBoundingClientRect();
        setImgDimensions({ width, height });
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let controls;

    if (window.innerWidth < 600) {
        controls = animate(y, [-imgDimensions.height, 0], {
          ease: 'linear',
          duration: 10,
          repeat: Infinity,
          repeatType: 'loop',
      });
    } else {
      controls = animate(x, [-window.innerWidth, 0], {
        ease: 'linear',
        duration: 10,
        repeat: Infinity,
        repeatType: 'loop',
      });
    }

    controlsRef.current = controls;

    return () => {
      controls.stop();
    };
  }, [x, y, imgDimensions.height]);

  const handleMouseEnter = () => {
    controlsRef.current?.pause();
  };

  const handleMouseLeave = () => {
    controlsRef.current?.play();
  };

  console.table(imgDimensions);
  return (
    <div className='slider' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.div
        className='card-y-slider'
        style={window.innerWidth < 600 ? null : { x }}
      >
        {duplicatedCards.map((card, index) => (
          <motion.div
            key={index}
            className='box'
            style={window.innerWidth < 600 ? { y, height: cardHeight } : { width: cardWidth }}
          >
            {card.description}
          </motion.div>
        ))}
      </motion.div>
      <div className='fade' ref={fade}></div>
    </div>
  );
};

export default InfiniteMovingCards;
