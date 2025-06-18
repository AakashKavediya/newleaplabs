"use client"
import React, { useEffect, useRef } from 'react';
import "@/stylingComponent/scrollBox.css"

const ScrollBoxes = () => {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  const boxCount = 5;

  const imageUrls = [
    '/projectImages/Crown.png',
    '/images/Embedded.png',
    '/projectImages/ContactUs.png',
    '/projectImages/hardware1.png',
    '/projectImages/Randomsatellite.png'
  ];

  useEffect(() => {
    const firstRow = firstRowRef.current;
    const secondRow = secondRowRef.current;

    firstRow.innerHTML += firstRow.innerHTML;
    secondRow.innerHTML += secondRow.innerHTML;

    const animate = () => {
      if (firstRow.scrollLeft >= firstRow.scrollWidth / 2) {
        firstRow.scrollLeft = 0;
      } else {
        firstRow.scrollLeft += 1;
      }

      if (secondRow.scrollLeft <= 0) {
        secondRow.scrollLeft = secondRow.scrollWidth / 2;
      } else {
        secondRow.scrollLeft -= 1;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div>
      <h2 className='custom-heading'>PROJECTS</h2>
      <div className="custom-container">
        <div ref={firstRowRef} className="custom-row custom-row1">
          {[...Array(boxCount)].map((_, i) => (
            <div key={`first-${i}`} className="custom-box">
              <img
                src={imageUrls[i]}
                alt={`Content ${i + 1}`}
                className="custom-box-image"
              />
            </div>
          ))}
        </div>

        <div ref={secondRowRef} className="custom-row custom-row2">
          {[...Array(boxCount)].map((_, i) => (
            <div key={`second-${i}`} className="custom-box">
              <img
                src={imageUrls[i]}
                alt={`Content ${i + 1}`}
                className="custom-box-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollBoxes;
