/* eslint-disable react/no-unescaped-entities */
import "./home.css";
import HomeSocials from "./HomeSocials";
import { FaAnglesDown } from "react-icons/fa6";
import Me from "../../assets/Mee3.png";
import Cv from "../../assets/Abdelrahman-Fadl.pdf";

function home() {
  return (
    <div className="home">
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Abdelrahman Fadl</h1>
        <h4 className="text-light">Front-End Developer</h4>

        <div className="btns">
          <a href={Cv} className="btn" download>
            Download Cv
          </a>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>

        <div className="me">
          <img src={Me} alt="" />
        </div>

        <a href="#about" className="scroll_down">
          <FaAnglesDown />
        </a>

        <HomeSocials />
      </div>
    </div>
  );
}

export default home;
