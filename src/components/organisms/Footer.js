import React from 'react'
import "./Footer.css"
import Discord from "../../images/icons/Discord.svg"
import Twitter from "../../images/icons/Combined-Shape.svg"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
            
            <div className="footer-email">
            <p>example@example.com</p> 
            </div>
            <div className="footer-images">
                <img src={Discord}  alt="Discord"/>
                <img src={Twitter} alt="Twitter" />
            </div>
        </div>
        
    </footer>
    )
}

export default Footer
