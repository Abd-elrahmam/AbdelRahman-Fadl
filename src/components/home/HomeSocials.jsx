import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaDribbble } from "react-icons/fa";



function HomeSocials() {
  
  return(   
  <div className="home_socials">
    <a href="www.linkedin.com/in/abdelrahman-fadl-578351266" target="_blank"><FaLinkedin /></a>
    <a href="https://github.com/Abd-elrahmam" target="_blank"><FaGithub /></a>
    {/* <a href="#" target="_blank"><FaDribbble /></a> */}
  </div>
  )
}

export default HomeSocials;
