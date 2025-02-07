import "./footer.css";

import { FaFacebook } from "react-icons/fa";
// import Insta from "https://www.facebook.com/memo.mo.1675";
// import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Abdelrahman
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_social">
        <a href="https://www.facebook.com/memo.mo.1675/" target="_blank">
          <FaFacebook />
        </a>
        {/* <a href={Face} target="_blank">
          <FaInstagramSquare />
        </a> */}
      </div>
      <div className="footer_copyright">
        <small>
          &copy; <a href="#">Abdelrahman Fadl</a>All rights reserved
        </small>
      </div>
    </footer>
  );
}

export default Footer;
