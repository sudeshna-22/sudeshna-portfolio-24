import React from "react";

const Information = () => {
  const getExperience = () => {
    const startDate = new Date(2021, 2);
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    const experience = months >= 6 ? years + 0.5 : years;
    return experience.toFixed(1).replace(".0", "");
  };

  return (
    <div className="about-info grid">
      <div className="about-container-box">
        <i className="uil uil-award about-icon"></i>
        <h3 className="about-title">Experience</h3>
        <span className="about-subtitle">{getExperience()} Years Working</span>
      </div>
      <div className="about-container-box">
        <i className="uil uil-briefcase about-icon"></i>
        <h3 className="about-title">Expertise</h3>
        <span className="about-subtitle">.NET | React JS</span>
      </div>
      <div className="about-container-box">
        <i className="uil uil-folder-check about-icon"></i>
        <h3 className="about-title">Completed</h3>
        <span className="about-subtitle">10+ Projects</span>
      </div>
    </div>
  );
};

export default Information;
