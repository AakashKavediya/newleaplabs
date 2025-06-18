"use client"
import { useEffect, useRef } from "react";
import Link from "next/link";
import "@/stylingComponent/projectManager.css";

const ProjectManager = (props) => {
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  const leftImagesRef = useRef([]);
  const rightImagesRef = useRef([]);

  useEffect(() => {
    // Initialize Intersection Observers for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    // Animation for left container
    const leftObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          leftObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Animation for right container
    const rightObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          rightObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Animation for small images
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-in");
            imageObserver.unobserve(entry.target);
          }, index * 100); // Staggered delay
        }
      });
    }, observerOptions);

    if (leftContainerRef.current) {
      leftObserver.observe(leftContainerRef.current);
    }
    if (rightContainerRef.current) {
      rightObserver.observe(rightContainerRef.current);
    }

    // Observe small images
    leftImagesRef.current.forEach(img => img && imageObserver.observe(img));
    rightImagesRef.current.forEach(img => img && imageObserver.observe(img));

    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
      imageObserver.disconnect();
    };
  }, []);

  // Hover animation handlers
  const handleHover = (e) => {
    e.currentTarget.style.transform = "scale(1.02)";
    e.currentTarget.style.transition = "transform 0.3s ease";
  };

  const handleHoverEnd = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div>
      <div 
        className="leftPMcontainer" 
        ref={leftContainerRef}
      >            
        <div className="leftPMcontentContainer">            
          <div className="leftPMinfoContainer">
            <h2 className="projectHeading">{props.projectName1}</h2>
            <p className="projectDiscription">{props.projectDiscription1}</p>
          </div>
          <div className="leftPMsmallImgContainer">
            <img 
              className="leftPMsmallImage" 
              src={props.src1} 
              ref={el => leftImagesRef.current[0] = el}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            />
            <img 
              className="leftPMsmallImage" 
              src={props.src2} 
              ref={el => leftImagesRef.current[1] = el}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            />
          </div>
        </div>
        <div 
          className="leftPMmainImageContainer"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
        >
          <img className="leftPMminImage" src={props.mainImage1} />
          <a 
            className="leftPmvisitLink" 
            href="https://aakashkavediya.github.io/NLLproject-1/"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(90deg, rgb(218, 218, 218), whitesmoke, white)";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(90deg, white, whitesmoke, rgb(218, 218, 218))";
              e.currentTarget.style.color = "#333333";
            }}
          >
            Visit
          </a>
        </div>
      </div>
      
      <div 
        className="rightPMcontainer" 
        ref={rightContainerRef}
      >            
        <div 
          className="rightPMmainImageContainer"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
        >
          <img className="rightPMminImage" src={props.mainImage2} />
          <a 
            className="rightPmvisitLink" 
            href="https://aakashkavediya.github.io/NLLproject-1/"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(90deg, rgb(218, 218, 218), whitesmoke, white)";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(90deg, white, whitesmoke, rgb(218, 218, 218))";
              e.currentTarget.style.color = "#333333";
            }}
          >
            Visit
          </a>
        </div>
        <div className="rightPMcontentContainer">            
          <div className="rightPMinfoContainer">
            <h2 className="projectHeading">{props.projectName2}</h2>
            <p className="projectDiscription">{props.projectDiscription2}</p>
          </div>
          <div className="rightPMsmallImgContainer">
            <img 
              className="rightPMsmallImage" 
              src={props.src3} 
              ref={el => rightImagesRef.current[0] = el}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            />
            <img 
              className="rightPMsmallImage" 
              src={props.src4} 
              ref={el => rightImagesRef.current[1] = el}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Initial state for animations */
        .leftPMcontainer, .rightPMcontainer {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .leftPMsmallImage, .rightPMsmallImage {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        
        /* Animated state */
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Hover effects */
        .leftPMsmallImage:hover, .rightPMsmallImage:hover,
        .leftPMmainImageContainer:hover, .rightPMmainImageContainer:hover {
          transform: scale(1.02);
        }
        
        .leftPmvisitLink:hover, .rightPmvisitLink:hover {
          background: linear-gradient(90deg, rgb(218, 218, 218), whitesmoke, white) !important;
          color: #000 !important;
        }
      `}</style>
    </div>
  );
};

export default ProjectManager;