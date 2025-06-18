"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import "@/stylingComponent/contentLayer.css";

const ContentLayer = () => {
    const [displayText, setDisplayText] = useState("");
    const [isTypingStarted, setIsTypingStarted] = useState(false);
    const fullText = "EXPLORE THE EARTH FROM SPACE";
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // This timeout delays the start of typing by 5 seconds
        const startTypingTimeout = setTimeout(() => {
            setIsTypingStarted(true);
        }, 3000);

        return () => clearTimeout(startTypingTimeout);
    }, []);

    useEffect(() => {
        if (isTypingStarted && currentIndex < fullText.length) {
            const typingTimeout = setTimeout(() => {
                setDisplayText(prevText => prevText + fullText[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 150); // Typing speed

            return () => clearTimeout(typingTimeout);
        }
    }, [currentIndex, isTypingStarted]);

    return (
        <div className="layerCanvas">
            <div className="textSection">
                <h2 className="title">
                    {displayText}
                    {/* Show cursor only when typing is in progress */}
                    {isTypingStarted && currentIndex < fullText.length && (
                        <span className="cursor">|</span>
                    )}
                </h2>
                <p className="subtitle">
                    We are a team of students from the Indian Institute of Technology, Kharagpur, who are passionate about robotics and technology.
                </p>
                <Link className="goNext" href="/projects">View Next</Link>
            </div>
        </div>
    );
};

export default ContentLayer;