import React from 'react'
import BeliefImg from "../../assets/belieff.png";
import "./interest.css"

const Interest = () => {
  return (
    <section className="interest section" id="interest">
      <span className="section-subtitle">
        Professional Thrills & What Drives
      </span>
      {/* <h2 className="section-title-sub"> Work Interests & Personal Passion</h2> */}
      <h2 className="section-title"> Interests & Passion</h2>

      <div class="experience-details-container container">
        <div class="interest-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Work Interests</h2>
            <div class="article-container">
              <article>
                <i className="bx bx-briefcase icon"></i>
                <div>
                  <h4>Frontend</h4>
                  <p>Design & Dev.</p>
                </div>
              </article>
              <article>
                <i className="bx bx-briefcase icon"></i>
                <div>
                  <h4>Backend</h4>
                  <p>Development</p>
                </div>
              </article>
              <article>
                <i className="bx bx-briefcase icon"></i>
                <div>
                  <h4>Project</h4>
                  <p>Management</p>
                </div>
              </article>
              <article>
                <i className="bx bx-briefcase icon"></i>
                <div>
                  <h4>Content</h4>
                  <p>Create & Write</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Personal Passion</h2>
            <div class="article-container">
              <article>
                <i className="bx bx-briefcase icon"></i>
                <div>
                  <h4>Make & Edit </h4>
                  <p>Videos</p>
                </div>
              </article>
              <article>
                <i className="bx bx-briefcase icon"></i>
                <div>
                  <h4>Travelling</h4>
                  <p>New Places</p>
                </div>
              </article>
              <article>
                <i className="bx bx-briefcase icon"></i>
                <div>
                  <h4>Playing Uke.</h4>
                  <p>Ukelele</p>
                </div>
              </article>
              <article>
                <i className="bx bx-briefcase icon"></i>
                <div>
                  <h4>Gymnasium</h4>
                  <p>Fitness</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Interest