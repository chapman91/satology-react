import React, { useEffect } from 'react';
import "./Navbar.css";
import Logo from "../../images/icons/Group 12.svg";

const Navbar = () => {
  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMain = document.querySelector(".nav-list");
    
    // Adds the 'nav-list.active' class on elements
    const handleMenuToggle = () => {

      // Check if the element exist (is not null)
      if (navMain !== null) {
      navMain.classList.toggle("active");
      } else {
        // The element does not exist, handle the case accordingly
        console.log('navMain does not exist')
      }
    }

    menuToggle.addEventListener("click", handleMenuToggle);

    // 
    const handleResize = () => {
      if (window.innerWidth > 768) {
        navMain.classList.remove("active");
      }
    }

    window.addEventListener("resize", handleResize);

    // Returns the results of removing the event listener
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
          <a href="#Tools">TOOLS</a>
        </li>
        <li>
          <a href="#Launchpad">LAUNCHPAD</a>
        </li>
        <li>
          <a href="#Launchpad">MARKETPLACE</a>
        </li>
        <li>
          <a href="#Launchpadss">ABOUT</a>
        </li>
      </ul>
    </div>
    <button className="web3-connect" id="connect">
      Web3 Connect
    </button>
    <div className="hamburger-menu" id="menu-toggle" aria-label="Toggle menu">
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </div>
  </nav>


  )
}

export default Navbar