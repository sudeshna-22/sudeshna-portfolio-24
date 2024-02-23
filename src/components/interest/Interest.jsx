import React from 'react'
import FrontendImg from "../../assets/frontend.png";
import BackendImg from "../../assets/backend.png";
import ProjectImg from "../../assets/project.png";
import ContentImg from "../../assets/content.png";
import VideoImg from "../../assets/video.png";
import TravelImg from "../../assets/travel.png";
import UkeImg from "../../assets/ukulele.png";
import GymImg from "../../assets/gym.png";

import "./interest.css"

const Interest = () => {
  return (
    <section className="interest section" id="interest">
      <span className="section-subtitle">
        Professional Thrills & What Drives Me
      </span>
      {/* <h2 className="section-title-sub"> Work Interests & Personal Passion</h2> */}
      <h2 className="section-title"> Interests & Passion</h2>

      <div class="experience-details-container container">
        <div class="interest-containers">
          <div class="details-container">
            <h2 class="experience-sub-title"> <i className="bx bx-briefcase icon"></i> Professional Interests</h2>
            <div class="article-container">
              <article>
                <img
                  src={FrontendImg}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h4>Frontend</h4>
                  <p>Design & Dev.</p>
                </div>
              </article>
              <article>
                <img
                  src={BackendImg}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h4>Backend</h4>
                  <p>Development</p>
                </div>
              </article>
              <article>
                <img
                  src={ProjectImg}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h4>Project</h4>
                  <p>Management</p>
                </div>
              </article>
              <article>
                <img
                  src={ContentImg}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h4>Content</h4>
                  <p>Create & Write</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title"><i className="bx bx-briefcase icon"></i> Personal Passions</h2>
            <div class="article-container">
              <article>
                <img
                  src={VideoImg}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h4>Make & Edit </h4>
                  <p>Videos</p>
                </div>
              </article>
              <article>
                <img
                  src={TravelImg}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h4>Travelling</h4>
                  <p>New Places</p>
                </div>
              </article>
              <article>
                <img
                  src={UkeImg}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h4>Playing Uke.</h4>
                  <p>Ukelele</p>
                </div>
              </article>
              <article>
                <img
                  src={GymImg}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h4>Gymnasium</h4>
                  <p>For Fitness</p>
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