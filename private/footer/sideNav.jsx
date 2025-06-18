"use client"
import { FaLinkedin, FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6"; // "fa6" gives latest Twitter (X) icon
import { BiLogoFacebook } from "react-icons/bi";

import "@/stylingComponent/iconNav.css"
const SideNav = () => {
  return (
    <div>
        <nav className="iconHolder" >
            <a href="https://linkedin.com" target="_blank"><FaLinkedin className="icon" /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram className="icon" /></a>
            <a href="https://facebook.com" target="_blank"><FaFacebook className="icon" /></a>
            <a href="https://x.com" target="_blank"><FaXTwitter className="icon" /></a>
        </nav>
        <div className="ContactUsContainer">
          <h3 className="ContactUsHeading" >Want to join our team? <a className="ContactUsLink" href="https://aakashkavediya.github.io/NLI_ContactUs/">Contact us</a> </h3>
          
        </div>
    </div>
  )
}

export default SideNav
