import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Consulting</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Code review and performance analysis</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimization of user interface for speed and responsiveness</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Framework selection guidance (React vs Vue.js)</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>AI-Powered Development Workflow Consulting</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Code Quality & Review Automation</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Component-based architecture planning</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Guidance on implementing responsive design best practices</p>
            </li>
          </ul>
        </article>
        {/*END OF Frontend Consulting*/}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Custom frontend development using React, Vue.js, and JavaScript
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Responsive, mobile-friendly layouts with HTML, Javascript, and
                Tailwind CSS
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>AI-Augmented Development & Code Optimization</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Integration of APIs and dynamic functionality</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-browser compatibility and performance optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building Single Page Applications (SPAs)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Maintenance & Bug Resolution</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}

        <article className="service">
          <div className="service__head">
            <h3>Backend Integration</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Basic API setup using Node.js</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Simple database operations with MySQL and MongoDB</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Setting up basic server routes and handling form submissions
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>API Testing & Documentation with Postman</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>AI-Powered Backend Optimization</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Supabase Integration</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Connecting frontend to backend for dynamic data handling</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Using environment variables and basic project structuring</p>
            </li>
          </ul>
        </article>
        {/*END OF Backend Integration*/}
      </div>
    </section>
  );
};

export default Services;
