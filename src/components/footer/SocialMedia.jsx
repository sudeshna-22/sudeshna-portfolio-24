import React from 'react'
import './footer.css';

const SocialMedia = () => {
  return (
    <section className="social-media">
      <div className="social-media-container container">
        <h1 className="social-section-title">
          Thank You For Visiting!
        </h1>

        <ul className="section-link-list">
          <li>
            <a href="#" className="section-footer-link">About</a>
          </li>
          {/* <li>
            <a href="#" className="section-footer-link">Interest & Passion</a>
          </li> */}
          <li>
            <a href="#" className="section-footer-link">Expertise</a>
          </li>
          <li>
            <a href="#" className="section-footer-link">Projects</a>
          </li>
        </ul>
        <div className="sm-link-list">
          <a href="" className="sm-link" target='_blank'><i className="bx bxl-linkedin"></i></a>
          <a href="" className="sm-link" target='_blank'><i className="bx bxl-facebook"></i></a>
          <a href="" className="sm-link" target='_blank'><i className="bx bxl-instagram"></i></a>
        </div>
      </div>

    </section>
  )
}

export default SocialMedia