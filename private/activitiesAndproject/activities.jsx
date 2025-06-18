"use client";
import React, { useEffect } from "react";
import "@/stylingComponent/EventandActivities.css";

const Activities = () => {
  const achievements = [
    {
      title: "TITLE OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/11/db/a1/11dba106a7feecb4e8d6a502e229304e.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },{
      title: "TITLE OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/11/db/a1/11dba106a7feecb4e8d6a502e229304e.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },{
      title: "TITLE OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/11/db/a1/11dba106a7feecb4e8d6a502e229304e.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },{
      title: "TITLE OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/11/db/a1/11dba106a7feecb4e8d6a502e229304e.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    }
  ];

  const events = [
    {
      title: "TITLE OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/11/db/a1/11dba106a7feecb4e8d6a502e229304e.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },{
      title: "TITLE OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/11/db/a1/11dba106a7feecb4e8d6a502e229304e.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },{ 
      title: "TITLE OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/11/db/a1/11dba106a7feecb4e8d6a502e229304e.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },{
      title: "TITLE OF PROJECT",
      date: "01 JANUARY 2024",
      image: "https://i.pinimg.com/736x/11/db/a1/11dba106a7feecb4e8d6a502e229304e.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },
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

    document.querySelectorAll(".atimeline-block").forEach(block => {
      observer.observe(block);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="acontainer">
      {/* Achievements Timeline */}
      <div className="atimeline-container">
        <h1 className="atimeline-heading">ACHIEVEMENTS</h1>
        <div className="atimeline">
          <div className="atimeline-line"></div>

          {achievements.map((item, index) => (
            <div
              key={`achievement-${item.date}-${index}`}
              className={`atimeline-block ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="atimeline-date">{item.date}</div>
              <div className="atimeline-content">
                <div className="atimeline-card">
                  <h3 className="acardHeading">{item.title}</h3>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => e.target.src = "/images/default-achievement.png"}
                  />
                  <p className="adescriptionText">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events Timeline */}
      <div className="atimeline-container">
        <h1 className="atimeline-heading">EVENTS</h1>
        <div className="atimeline">
          <div className="atimeline-line"></div>

          {events.map((item, index) => (
            <div
              key={`event-${item.date}-${index}`}
              className={`atimeline-block ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="atimeline-date">{item.date}</div>
              <div className="atimeline-content">
                <div className="atimeline-card">
                  <h3 className="acardHeading">{item.title}</h3>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => e.target.src = "/images/default-achievement.png"}
                  />
                  <p className="adescriptionText">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
