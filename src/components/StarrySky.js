import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
const StarrySky = () => {
    const num = 60;
  
    const randomRadius = () => {
      return Math.random() * 0.7 + 0.6;
    };
  
    const getRandomX = () => {
      return Math.floor(Math.random() * Math.floor(window.innerWidth)).toString();
    };
  
    const getRandomY = () => {
      return Math.floor(Math.random() * Math.floor(window.innerHeight)).toString();
    };
  
    const starryNight = () => {
      anime({
        targets: [".star"],
        opacity: [
          {
            duration: 700,
            value: "0"
          },
          {
            duration: 700,
            value: "1"
          }
        ],
        easing: "linear",
        loop: true,
        delay: (el, i) => 50 * i
      });
    };
  
    const shootingStars = () => {
      anime({
        targets: [".wish"],
        easing: "linear",
        loop: true,
        delay: (el, i) => 1000 * i,
        opacity: [
          {
            duration: 700,
            value: "1"
          }
        ],
        width: [
          {
            value: "150px"
          },
          {
            value: "0px"
          }
        ],
        translateX: 350
      });
    };
  
    useEffect(() => {
      starryNight();
      shootingStars();
    }, []);
  
    return (
      <div id="App" className="starry-sky">
        <svg id="sky">
          {[...Array(num)].map((x, y) => (
            <circle
              cx={getRandomX()}
              cy={getRandomY()}
              r={randomRadius()}
              stroke="none"
              strokeWidth="0"
              fill="white"
              key={y}
              className="star"
            />
          ))}
        </svg>
        <div id="shootingstars">
          {[...Array(60)].map((x, y) => (
            <div
              key={y}
              className="wish"
              style={{
                left: `${getRandomY()}px`,
                top: `${getRandomX()}px`
              }}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default StarrySky;