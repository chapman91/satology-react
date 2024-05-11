import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div id="Tools"> 
    <div className="hug">

    <div className="title_skill">
    <h1>LAUNCH SATOSHI</h1>
    </div>
     
    <div className="container-skill">
      <div className="skill">
        <div className="outer">
          <div className="inner">
            <div className="hover-div">
              <h2>1</h2>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#ffb24b" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <circle cx={80} cy={80} r={70} strokeLinecap="round" />
        </svg>
        <h5>Select Category</h5>
      </div>
      {/* Circle Two */}
      <div className="skill">
        <div className="outer">
          <div className="inner">
            <div className="hover-div">
              <h2>2</h2>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle cx={80} cy={80} r={70} strokeLinecap="round" />
        </svg>
        <h5>Specify Criteria</h5>
      </div>
      {/* Circle Three */}
      <div className="skill">
        <div className="outer">
          <div className="inner">
            <div className="hover-div">
              <h2>3</h2>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle cx={80} cy={80} r={70} strokeLinecap="round" />
        </svg>
        <h5>Details</h5>
      </div>
    </div>

    </div>
</div>
  )
}

export default Header