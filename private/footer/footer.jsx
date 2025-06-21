"use client"
import React, { useState } from 'react';
import { FaEnvelope } from "react-icons/fa";
import SideNav from './sideNav';
import { FaCopyright } from "react-icons/fa";
import { getDatabase, ref, push } from "firebase/database";

//firebase config
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBF234pN2BuhM1hl2GSgHIm1N5sngcZDN8",
  authDomain: "newleapinitiative-f58ed.firebaseapp.com",
  databaseURL: "https://newleapinitiative-f58ed-default-rtdb.firebaseio.com",
  projectId: "newleapinitiative-f58ed",
  storageBucket: "newleapinitiative-f58ed.firebasestorage.app",
  messagingSenderId: "43985683114",
  appId: "1:43985683114:web:becfe31dcd4a22d6ff46d3",
  measurementId: "G-QLLWKRWXMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

import "@/stylingComponent/iconNav.css"

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter an email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const db = getDatabase();
      const subscribersRef = ref(db, 'subscribers');
      await push(subscribersRef, {
        email: email,
        timestamp: new Date().toISOString()
      });
      
      setSubmitted(true);
      setEmail('');
      setError('');
      alert(`Thanks for subscribing. Will share all new updates on ${email} `)
    } catch (err) {
      console.error('Error submitting email:', err);
      setError('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <footer className="footer">
      <div className='SubscribeContainer'>
        <h3 className='stayConnectedText'>STAY CONNECTED WITH US AND GET THE LATEST UPDATES</h3>
        <div className='subscribeMainContainer'>
          <form onSubmit={handleSubmit} className='subscribeForm'>
            <div className='inputContainer'>
              <FaEnvelope />
              <input 
                className='emailInput' 
                id='email' 
                name='email' 
                type='email'
                placeholder='EMAIL ID' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitted}
              />
            </div>
            <button 
              type='submit' 
              className='submitButton'
              disabled={submitted}
            >
              {submitted ? 'THANK YOU!' : 'SUBSCRIBE'}
            </button>
          </form>
        </div>
        {error && <p className='errorMessage'>{error}</p>}
      </div>
      <div className='layerTwo'>
        <div className='addressContainer'>
          <div className='ImageCOntainer'>
            <img src="/images/SomaiyaLogo.svg" className='image' />
          </div>
          <div className='somaiyaInfo'>
            <b className='collegeName'>KJ SOMAIYA INSTITUTE OF TECHNOLOGY</b>
            <p className='address'>Ayurvihar Complex, Eastern Express Highway East, Near Everard Nagar, 400022, Sion</p>
            <code className='email'>nli@somaiya.edu</code>
          </div>
        </div>
        <SideNav />
      </div>
      <div className='copyrighContainer'>
        <FaCopyright className='ccicon' /><p className='ccText'>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;