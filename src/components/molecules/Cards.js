import React from 'react'
import "./Cards.css"
import image1 from "../../images/icons/calculator-icon.svg"
import image2 from "../../images/icons/blocks-icon.svg"
import image3 from "../../images/icons/calendar.svg"
import image4 from "../../images/icons/Frame113.svg"
import Button from "../../components/atoms/Button"

const Cards = () => {
  return (
  <>
  
  <div className="card-section">
    <div className="card-title">
    <h1>Satoshi Criteria</h1>
    <p>Set the foundation for your collection by specifying the Satoshi Criteria</p>
  </div>
   
    {/* first card */}
    <div className="top-cards">
      <div className="card">
        {/* title */}
        <div className="title">
          {/* SVG icon */}
          <img src={image1} alt="SVG Icon" />
          {/* description */}
          <h3>Satoshi Range</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          temporibus sunt repellendus, cupiditate quasi nesciunt enim
          consequatur quos eius voluptates, rerum impedit consequuntur!
          Voluptatem obcaecati molestiae minus nemo quae velit.
        </p>
      </div>
      {/* second card */}
      <div className="card">
        <div className="title">
          <img src={image2} alt="SVG Icon" />
          <h3>Block number</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          temporibus sunt repellendus, cupiditate quasi nesciunt enim
          consequatur quos eius voluptates, rerum impedit consequuntur!
          Voluptatem obcaecati molestiae minus nemo quae velit.
        </p>
      </div>
    </div>
    {/* third card */}
    <div className="bottom-cards">
      <div className="card">
        <div className="title">
          <img src={image3} alt="SVG Icon" />
          <h3>Specific dates</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          temporibus sunt repellendus, cupiditate quasi nesciunt enim
          consequatur quos eius voluptates, rerum impedit consequuntur!
          Voluptatem obcaecati molestiae minus nemo quae velit.
        </p>
      </div>
      {/* fourth card */}
      <div className="card">
        <div className="title">
          <img src={image4} alt="SVG Icon" />
          <h3>Transaction ID</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          temporibus sunt repellendus, cupiditate quasi nesciunt enim
          consequatur quos eius voluptates, rerum impedit consequuntur!
          Voluptatem obcaecati molestiae minus nemo quae velit.
        </p>
      </div>
    </div>

   <Button/>
  
  </div>
  </>
  )
}

export default Cards