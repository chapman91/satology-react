import React, { useEffect } from 'react';
import "./Navbar.css";
import Logo from "../../images/icons/Group 12.svg";

const Navbar = () => {
  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMain = document.querySelector(".nav-main");
    
    const handleMenuToggle = () => {
      navMain.classList.toggle("active");
    }

    menuToggle.addEventListener("click", handleMenuToggle);

    const handleResize = () => {
      if (window.innerWidth > 768) {
        navMain.classList.remove("active");
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      menuToggle.removeEventListener("click", handleMenuToggle);
      window.removeEventListener("resize", handleResize);
    };
 }, [])

  return (
  
  <nav className="navbar">
    <div className="logo">
      <img src={Logo} alt="Logo" />
      <h5>
        <span className="colored">SAT</span>OLOGY
      </h5>
    </div>
    <div className="nav-main">
      <ul className="nav-list">
        <li>
          <a href="#">TOOLS</a>
        </li>
        <li>
          <a href="#">LAUNCHPAD</a>
        </li>
        <li>
          <a href="#">MARKETPLACE</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
      </ul>
    </div>
    <button className="web3-connect" id="connect">
      Web3 Connect
    </button>
    <div className="hamburger-menu" id="menu-toggle">
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </div>
  </nav>


  )
}

export default Navbar