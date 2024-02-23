import React from 'react'
import './expertise.css'

const Expertise = () => {
  return (
    <>
      <section className="expertise section" id="expertise">
        <span className="section-subtitle">
          Experiences, Skills & Education
        </span>
        <h2 className="section-title">Expertise</h2>
        <div className="expertise-container grid">
          <section className='partners'>
            <div className='partners-img-container'>
              <div className='partners-img'></div>
            </div>
          </section>
          <main className="row">
            <section className="col">

              <header className="title">
                <i className="bx bx-briefcase icon"></i>  <h2>Experience</h2>
              </header>

              <div className="contents">

                <div className="box">
                  <span>Jan 2023 - Oct 2023</span>
                  <h4>FULL STACK DEVELOPER (SENIOR) </h4>
                  <p>Neo Software Pvt. Ltd.</p>
                  <span>View Roles & Responsibilites &gt;</span>
                </div>

                <div className="box">
                  <span>Oct 2021 - Nov 2022</span>
                  <h4>REACT DEVELOPER (INTERN & ASSOCIATE) </h4>
                  <p>GitStart</p>
                  <span>View Roles & Responsibilites &gt;</span>
                </div>

                <div className="box">
                  <span>Mar 2021 - Sept 2021</span>
                  <h4>WEB DEVELOPER (JUNIOR & MID-LEVEL) </h4>
                  <p>ByteBurst Pvt. Ltd.</p>
                  <span>View Roles & Responsibilites &gt;</span>
                </div>

              </div>
            </section>

            <section className="col">

              <header className="title">
                <i className="bx bx-briefcase icon"></i> <h2>Education</h2>
              </header>

              <div className="contents">

                <div className="box">
                  <span>2022 - Dec 2024 (EST)</span>
                  <h4>MSc. IT & APPLIED SECURITY (DATA ANALYTICS) </h4>
                  <p>Master's Degree </p>
                  <span>Islington College (London Metropolitan University)
                  </span>
                </div>

                <div className="box">
                  <span>2018 - Dec 2021</span>
                  <h4>BSc. (HONS) IN COMPUTING (SOFTWARE ENGINEERING)</h4>
                  <p>Bachelor's Degree </p>
                  <span>NAMI College (University of Northampton)
                  </span>
                </div>

                <div className="box">
                  <span>2016 - Apr 2018 </span>
                  <h4>+2 Science - NEB </h4>
                  <p>High School Degree</p>
                  <span>CCRC (Capital College & Research Center)</span>
                </div>

              </div>
            </section>
          </main>
          {/* <main className="row">
            <section className="col">

              <header className="title">
                <i className="bx bx-briefcase icon"></i>  <h2>Certifications</h2>
              </header>

            </section>

          </main> */}
        </div>
      </section>

    </>
  )
}

export default Expertise