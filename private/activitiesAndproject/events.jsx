"use client";
import React, { useEffect } from "react";
import "@/stylingComponent/EventandActivities.css";

const Events = () => {
  const achievements = [
    {
      title: "Somaiya's BeliefSat-0",
      date: "01 JANUARY 2024",
      image: "https://nll-ac7v.onrender.com/assets/BeliefSat-0%20Launch-C9EGi7qo.jpg",
      description: "Somaiya's BeliefSat-0 is developed by students of K.J. Somaiya Institute of Technology to widen the reach of Amateur Radio-operators around the globe. The payload is a part of tribute to 100 years of Amateur Radio in India and meant to be in service to the Amateur radio community worldwide. The payload performs UHF to VHF FM Voice Repeating and APRS Digipeating."
    },{
      title: "Winner of Antenna Making Contest",
      date: "JANUARY 2020",
      image: "https://nll-ac7v.onrender.com/assets/antennaMakingContest-Bqp8fIH5.jpg",
      description: "Winner of Antenna Making Contest organized by LARC at Hydrabad"
    },{
      title: "Winner of Antenna Making Contest",
      date: "01 OCTOBER 2022",
      image: "https://i.pinimg.com/736x/95/93/0b/95930b20185adc85c0e1af274cda9714.jpg",
      description: "Designed and built an innovative antenna prototype"
    },{
      title: "Winner of Antenna Making Contest",
      date: "01 OCTOBER 2022",
      image: "https://i.pinimg.com/736x/95/93/0b/95930b20185adc85c0e1af274cda9714.jpg",
      description: "Designed and built an innovative antenna prototype"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll(".timeline-block").forEach(block => {
      observer.observe(block);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
    <div className="timeline-container">
      <h1 className="timeline-heading">ACHIEVEMENTS</h1>
      <div className="timeline">
        <div className="timeline-line"></div>
        
        {achievements.map((item, index) => (
          <div 
            key={`${item.date}-${index}`}
            className={`timeline-block ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <div className="timeline-card">
                <h3 className="cardHeading" >{item.title}</h3>
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => e.target.src = "/images/default-achievement.png"}
                />
                <p className="descriptionText" >{item.description}</p>

                {/* <button className="timeline-btn">View Details</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Events;