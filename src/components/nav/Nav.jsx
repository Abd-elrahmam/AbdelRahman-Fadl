import "./nav.css";
import { TiHomeOutline } from "react-icons/ti";
import { LuCircleUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { LuSend } from "react-icons/lu";

import { useState } from "react";
function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" className={activeNav === "#" ? "active" : ""} onClick={()=>setActiveNav("#") }><TiHomeOutline /></a>
      <a href="#about" className={activeNav === "#about" ? "active" : ""}  onClick={()=>setActiveNav("#about")}> <LuCircleUserRound /> </a>
      <a href="#skills"  className={activeNav === "#skills" ? "active" : ""} onClick={()=>setActiveNav("#skills")}> <BiBook /></a>
      <a href="#services" className={activeNav === "#services" ? "active" : ""}  onClick={()=>setActiveNav("#services")}><RiServiceLine /></a>
      <a href="#contact" className={activeNav === "#contact" ? "active" : ""}  onClick={()=>setActiveNav("#contact")}><LuSend /></a>
    </nav>
  );
}

export default Nav;
