"use client";
import "@/stylingComponent/loading.css"
import { useEffect, useRef, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const loadingBarRef = useRef(null);
  const logoPartsRef = useRef([]);
  const animationRefs = useRef([]);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Animate each logo part using Web Animations API
    logoPartsRef.current.forEach((part, index) => {
      if (!part) return;
      
      const animation = part.animate(
        [
          { opacity: 0, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        {
          duration: 400,
          delay: index * 80,
          easing: 'cubic-bezier(0.2, 0.8, 0.4, 1)',
          fill: 'both'
        }
      );
      animationRefs.current.push(animation);
    });

    // Animate loading bar
    const loadingBarAnimation = loadingBarRef.current.animate(
      [
        { transform: 'scaleX(0)' },
        { transform: 'scaleX(1)' }
      ],
      {
        duration: 2500,
        easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
        fill: 'both'
      }
    );
    animationRefs.current.push(loadingBarAnimation);

    // Final fade out
    const fadeOutTimer = setTimeout(() => {
      const container = document.querySelector('.loading-container');
      const containerAnimation = container.animate(
        [
          { opacity: 1 },
          { opacity: 0 }
        ],
        {
          duration: 600,
          easing: 'ease-out',
          fill: 'forwards'
        }
      );
      animationRefs.current.push(containerAnimation);

      containerAnimation.onfinish = () => {
        setShouldRender(false); // This will unmount the component
        if (onComplete) onComplete();
      };
    }, 2800);

    return () => {
      clearTimeout(fadeOutTimer);
      animationRefs.current.forEach(anim => anim?.cancel());
    };
  }, [onComplete]);

  if (!shouldRender) {
    return null; // This completely removes the component from DOM
  }

  return (
    <div className="loading-container">
      <div className="loading-animation">
        <div className="loading-logo">
          {['N', 'E', 'W', '', 'L', 'E', 'A', 'P', '', 'I', 'N', 'I', 'T', 'I', 'A', 'T', 'I', 'V', 'E'].map((char, idx) => (
            <span 
              key={idx} 
              className="logo-part"
              ref={el => logoPartsRef.current[idx] = el}
              style={char === '' ? { marginLeft: '10px' } : {}}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="loading-bar-container">
          <div className="loading-bar" ref={loadingBarRef}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;