"use client"
import React from 'react';import {  FaEnvelope } from "react-icons/fa";
import SideNav from './sideNav';import { FaCopyright } from "react-icons/fa"; // Classic © icon

// import styles from './Footer.module.css';
import "@/stylingComponent/iconNav.css"

const Footer = () => {
  return (
    <footer className="footer">
    <div className='SubscribeContainer' >
      <h3 className='stayConnectedText' >STAY CONNECTED WITH US AND GET THE LATEST UPDATES</h3>
      <div className='subscribeMainContainer' >
      <div className='inputContainer' >
      <FaEnvelope />
        <input className='emailInput' placeholder='EMAIL ID' />
      </div>
      <button className='submitButton'>SUBSCRIBE</button>
      </div>
      </div>
      <div className='layerTwo' >
        <div className='addressContainer' >
        <div className='ImageCOntainer' >
            <img src="/images/SomaiyaLogo.svg" className='image'  />
        </div>
        <div className='somaiyaInfo'>
            <b className='collegeName' >KJ SOMAIYA INSTITUTE OF TECHNOLOGY</b>
            <p className='address' >Ayurvihar Complex, Eastern Express Highway East, Near Everard Nagar, 400022, Sion</p>
            <code className='email'>nli@somaiya.edu</code>
        </div>
        </div>
        <SideNav />
      </div>
      <div className='copyrighContainer' >
      <FaCopyright className='ccicon' /><p className='ccText' >All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;