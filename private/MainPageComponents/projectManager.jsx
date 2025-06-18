// projectManager.jsx
"use client"
import { useEffect, useRef } from "react";
import Link from "next/link";
import "@/stylingComponent/projectManager.css";

const ProjectManager = (props) => {
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const leftThumbnailsRef = useRef([]);
  const rightThumbnailsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const leftObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          leftObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const rightObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          rightObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const thumbnailObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("fade-in");
            thumbnailObserver.unobserve(entry.target);
          }, index * 100);
        }
      });
    }, observerOptions);

    if (leftSectionRef.current) {
      leftObserver.observe(leftSectionRef.current);
    }
    if (rightSectionRef.current) {
      rightObserver.observe(rightSectionRef.current);
    }

    leftThumbnailsRef.current.forEach(img => img && thumbnailObserver.observe(img));
    rightThumbnailsRef.current.forEach(img => img && thumbnailObserver.observe(img));

    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
      thumbnailObserver.disconnect();
    };
  }, []);

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
        className="project-left-section" 
        ref={leftSectionRef}
      >            
        <div className="project-left-content">            
          <div className="project-left-info">
            <h2 className="project-title">{props.projectName1}</h2>
            <p className="project-description">{props.projectDiscription1}</p>
          </div>
          <div className="project-left-thumbnails">
            <img 
              className="project-thumbnail" 
              src={props.src1} 
              ref={el => leftThumbnailsRef.current[0] = el}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            />
            <img 
              className="project-thumbnail" 
              src={props.src2} 
              ref={el => leftThumbnailsRef.current[1] = el}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            />
          </div>
        </div>
        <div 
          className="project-left-main-image"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
        >
          <img className="project-featured-image" src={props.mainImage1} />
          <a 
            className="project-visit-link left" 
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
        className="project-right-section" 
        ref={rightSectionRef}
      >            
        <div 
          className="project-right-main-image"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
        >
          <img className="project-featured-image" src={props.mainImage2} />
          <a 
            className="project-visit-link right" 
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
        <div className="project-right-content">            
          <div className="project-right-info">
            <h2 className="project-title">{props.projectName2}</h2>
            <p className="project-description">{props.projectDiscription2}</p>
          </div>
          <div className="project-right-thumbnails">
            <img 
              className="project-thumbnail" 
              src={props.src3} 
              ref={el => rightThumbnailsRef.current[0] = el}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            />
            <img 
              className="project-thumbnail" 
              src={props.src4} 
              ref={el => rightThumbnailsRef.current[1] = el}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .project-left-section, .project-right-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .project-thumbnail {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        }
        
        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .project-thumbnail:hover,
        .project-left-main-image:hover, 
        .project-right-main-image:hover {
          transform: scale(1.02);
        }
        
        .project-visit-link:hover {
          background: linear-gradient(90deg, rgb(218, 218, 218), whitesmoke, white) !important;
          color: #000 !important;
        }
      `}</style>
    </div>
  );
};

export default ProjectManager;