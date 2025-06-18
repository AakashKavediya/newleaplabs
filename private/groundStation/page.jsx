"use client";
import { useEffect, useRef } from 'react';
import "@/stylingComponent/GroundStationComponent.css";
import EvenPost from "./postEven";
import OddPost from "./postOdd";

const GroundStationComponent = () => {
  const postsRef = useRef([]);

  useEffect(() => {
    // Animate each post with a delay
    postsRef.current.forEach((post, index) => {
      if (post) {
        setTimeout(() => {
          post.style.opacity = '1';
          post.style.transform = 'translateY(0)';
        }, index * 300); // 300ms delay between each component
      }
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="wrapperContainer">
      <h2 className='mainHeading'  >GROUND STATION</h2>

        <div 
          ref={el => postsRef.current[0] = el}
          className="post-wrapper"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease-out' }}
        >
          <EvenPost />
        </div>
        
        <div 
          ref={el => postsRef.current[1] = el}
          className="post-wrapper"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease-out 0.3s' }}
        >
          <OddPost />
        </div>
        
        <div 
          ref={el => postsRef.current[2] = el}
          className="post-wrapper"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease-out 0.6s' }}
        >
          <EvenPost />
        </div>
        
        <div 
          ref={el => postsRef.current[3] = el}
          className="post-wrapper"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease-out 0.9s' }}
        >
          <OddPost />
        </div>
        
        <div 
          ref={el => postsRef.current[4] = el}
          className="post-wrapper"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease-out 1.2s' }}
        >
          <EvenPost />
        </div>
        
        <div 
          ref={el => postsRef.current[5] = el}
          className="post-wrapper"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease-out 1.5s' }}
        >
          <OddPost />
        </div>
      </div>
    </div>
  );
};

export default GroundStationComponent;