"use client";
import React, { useEffect } from "react";
import "@/stylingComponent/Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      title: "HEADING OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/76/76/2b/76762b716484fe11f49f459b7741763c.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },{
      title: "HEADING OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/76/76/2b/76762b716484fe11f49f459b7741763c.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },{
      title: "HEADING OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/76/76/2b/76762b716484fe11f49f459b7741763c.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },{
      title: "HEADING OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/76/76/2b/76762b716484fe11f49f459b7741763c.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },{
      title: "HEADING OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/76/76/2b/76762b716484fe11f49f459b7741763c.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },{
      title: "HEADING OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/76/76/2b/76762b716484fe11f49f459b7741763c.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },{
      title: "HEADING OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/76/76/2b/76762b716484fe11f49f459b7741763c.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },{
      title: "HEADING OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/76/76/2b/76762b716484fe11f49f459b7741763c.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("acv-animate-in");
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll(".acv-timeline-item").forEach(block => {
      observer.observe(block);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="acv-container">
    <div className="acv-timeline-container">
      <h1 className="acv-main-heading">ACHIEVEMENTS</h1>
      <div className="acv-timeline">
        <div className="acv-timeline-line"></div>
        
        {achievements.map((item, index) => (
          <div 
            key={`${item.date}-${index}`}
            className={`acv-timeline-item ${index % 2 === 0 ? 'acv-left' : 'acv-right'}`}
          >
            <div className="acv-date">{item.date}</div>
            <div className="acv-content">
              <div className="acv-card">
                <h3 className="acv-card-title">{item.title}</h3>
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => e.target.src = "/images/default-achievement.png"}
                />
                <p className="acv-card-description">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Achievements;  