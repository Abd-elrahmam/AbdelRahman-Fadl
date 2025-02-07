/* eslint-disable react/no-unescaped-entities */
import "./about.css";
import ImageMe from "../../assets/Mee3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section className="about" id="about">
      <div className="top-section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ImageMe} alt="" />
          </div>
        </div>
        <div className="aboute_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ years Working</small>
            </div>
            <div className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clintes</h5>
              <small>10+ Worldwide</small>
            </div>
            <div className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </div>
          </div>
          <p>
            I'm Abdulrahman, a passionate Front-End Developer skilled in HTML,
            CSS, and JavaScript. I focus on building responsive and interactive
            web applications, constantly learning new technologies like React.js
            to enhance user experiences.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {};

export default About;
