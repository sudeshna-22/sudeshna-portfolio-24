import React from 'react'

const Information = () => {
  return (
    <div className="about-info grid">
      <div className="about-container-box">
        <i className="bx bx-award about-icon"></i>
        <h3 className="about-title">Experience</h3>
        <span className="about-subtitle">2.5 Years Working</span>
      </div>
      <div className="about-container-box">
        <i className="bx bx-briefcase about-icon"></i>
        <h3 className="about-title">Expertise</h3>
        <span className="about-subtitle">.NET | React JS</span>
      </div>
      <div className="about-container-box">
        <i className="bx bx-support about-icon"></i>
        <h3 className="about-title">Completed</h3>
        <span className="about-subtitle">10+ Projects</span>
      </div>
    </div>
  )
}

export default Information