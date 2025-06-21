"use client";
import React, { useState, useRef } from 'react';
import '@/stylingComponent/test.css';
import Head from 'next/head';
import GLBViewer from './model.jsx';

const information = [
  {
    id: 1,
    title: "BELIEF SAT - 0",
    date: "01/01/2024",
    image: "/images/image.png",
    description: "BeliefSat-0 is developed by students of K.J. Somaiya Institute of Technology to widen the reach of Amateur Radio-operators around the globe. The payload is a part of tribute to 100 years of Amateur Radio in India.",
    contributors: [
      ["Founding Member 1", "Founding Member 2", "Founding Member 3", "Founding Member 4"],
      // ["Founding Member 5", "Founding Member 6", "Founding Member 7", "Founding Member 8"]
    ]
  },
  {
    id: 2,
    title: "CubeSat",
    date: "01/01/2026",
    image: "/khushiModels/cubsat/cubesat.glb",
    description: "BeliefSat stands as a remarkable 2p-PocketQube standard student nano-satellite...",
    contributors: [
      ["Prototype Lead 1", "Prototype Lead 2", "Testing Engineer 1", "Testing Engineer 2"],
      // ["RF Specialist 1", "RF Specialist 2", "Software Lead", "Hardware Lead"]
    ]
  },
  {
    id: 3,
    title: "Contact Us Application",
    date: "10/03/2025",
    image: "https://aakashkavediya.github.io/NLI_ContactUs/",
    description: "It is a contact is form used in place of google form cause using this form the use can also get a basic information about the club and the domain it contain",
    contributors: [
      ["Aakash Kavediya", "Software Developer", "Software Developer", "Software Developer"],
      // ["Software Team 1", "Software Team 2", "Hardware Team 1", "Hardware Team 2"]
    ]
  },
  {
    id: 4,
    title: "BELIEF SAT - 0",
    date: "01/10/2022",
    image: "/assets/block/somaiyaPOD.glb",
    description: "Final payload delivered for integration with PSLV. IN-SPACE approval received...",
    contributors: [
      ["Project Manager", "ISRO Liaison", "Payload Lead", "Systems Engineer"],
      // ["Communication Lead", "Power Lead", "Structure Lead", "Thermal Lead"]
    ]
  },
  {
    id: 5,
    title: "BELIEF SAT - 0",
    date: "01/10/2021",
    image: "/assets/block/somaiyaPOD.glb",
    description: "Final payload delivered for integration with PSLV. IN-SPACE approval received...",
    contributors: [
      ["Project Manager", "ISRO Liaison", "Payload Lead", "Systems Engineer"],
      // ["Communication Lead", "Power Lead", "Structure Lead", "Thermal Lead"]
    ]
  },
  {
    id: 6,
    title: "BELIEF SAT - 0",
    date: "01/10/2020",
    image: "/assets/block/somaiyaPOD.glb",
    description: "Final payload delivered for integration with PSLV. IN-SPACE approval received...",
    contributors: [
      ["Project Manager", "ISRO Liaison", "Payload Lead", "Systems Engineer"],
      // ["Communication Lead", "Power Lead", "Structure Lead", "Thermal Lead"]
    ]
  },
  {
    id: 7 ,
    title: "BELIEF SAT - 0",
    date: "01/10/2019",
    image: "/assets/block/somaiyaPOD.glb",
    description: "Final payload delivered for integration with PSLV. IN-SPACE approval received...",
    contributors: [
      ["Project Manager", "ISRO Liaison", "Payload Lead", "Systems Engineer"],
      // ["Communication Lead", "Power Lead", "Structure Lead", "Thermal Lead"]
    ]
  },
  {
    id: 8,
    title: "BELIEF SAT - 0",
    date: "01/10/2018",
    image: "/assets/block/somaiyaPOD.glb",
    description: "Final payload delivered for integration with PSLV. IN-SPACE approval received...",
    contributors: [
      ["Project Manager", "ISRO Liaison", "Payload Lead", "Systems Engineer"],
      // ["Communication Lead", "Power Lead", "Structure Lead", "Thermal Lead"]
    ]
  },
  {
    id: 9,
    title: "BELIEF SAT - 0",
    date: "01/10/2017",
    image: "/assets/block/somaiyaPOD.glb",
    description: "Final payload delivered for integration with PSLV. IN-SPACE approval received...",
    contributors: [
      ["Project Manager", "ISRO Liaison", "Payload Lead", "Systems Engineer"],
      // ["Communication Lead", "Power Lead", "Structure Lead", "Thermal Lead"]
    ]
  }
];

const BeliefSat = () => {
  const [activeDate, setActiveDate] = useState("10/12/2018");
  const activeEvent = information.find(item => item.date === activeDate) || information[0];
  const sidebarRef = useRef(null);

  const handleDateClick = (date) => {
    setActiveDate(date);
  };

  const scrollSidebar = (direction) => {
    if (sidebarRef.current) {
      const scrollAmount = 200;
      sidebarRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="beliefsat-container">
      {/* Optional Head tag */}
    

      {/* Sidebar */}
      <div className="year-sidebar-wrapper">
        <button className="sidebar-arrow left" onClick={() => scrollSidebar('left')}>&lt;</button>
        <div className="year-sidebar" ref={sidebarRef}>
          {information.map((item) => (
            <button
              key={item.id}
              className={`year-button ${activeDate === item.date ? 'active' : ''}`}
              onClick={() => handleDateClick(item.date)}
            >
              <div className='extaSpaceL' ></div>
              {item.date}
            </button>
          ))}
        </div>
        <button className="sidebar-arrow right" onClick={() => scrollSidebar('right')}>&gt;</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Title */}
        <div className="title-section">
          <h1>{activeEvent.title}</h1>
          <p className="date">{activeEvent.date}</p>
        </div>

        {/* Image/Model/Iframe Viewer */}
        <div className="image-section">
          {activeEvent.image.endsWith('.glb') ? (
            <GLBViewer
              src={activeEvent.image}
              className="satellite-model"
              style={{ width: '100%', height: '500px' }}
            />
          ) : activeEvent.image.startsWith('http') && !activeEvent.image.match(/\.(jpg|jpeg|png|gif|webp)$/) ? (
            <iframe
              src={activeEvent.image}
              width="100%"
              height="100%"
              style={{ border: 'none', borderRadius: 15 }}
              loading="lazy"
              title="Embedded Website"
            />
          ) : (
            <img
              src={activeEvent.image}
              alt={`${activeEvent.title} Satellite`}
              className="satellite-image"
              style={{ borderRadius: 15, transition: '.5s' }}
            />
          )}
        </div>

        {/* Description */}
        <div className="description-section">
          <h2>DESCRIPTION:</h2>
          <div className="divider"></div>
          <p>{activeEvent.description}</p>
        </div>

        {/* Contributors */}
        <div className="contribution-section">
          <h2>CONTRIBUTION</h2>
          <div className="divider"></div>
          <div className="contributors-grid">
            {activeEvent.contributors.map((column, colIndex) => (
              <div className="contributor-column" key={colIndex}>
                {column.map((person, personIndex) => (
                  <div className="contributor" key={personIndex}>
                    {person}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeliefSat;



