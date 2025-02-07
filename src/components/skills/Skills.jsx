import "./skills.css";
import Css from "../../assets/css3.svg";
import Xpressjs from "../../assets/expressjs.svg";
import Figma from "../../assets/figma.svg";
import JavaScript from "../../assets/javascript.svg";
import Mongodb from "../../assets/mongodb.svg";
import Nodejs from "../../assets/nodejs.svg";
import ReactJs from "../../assets/react.svg";
import Tailwind from "../../assets/tailwindcss.svg";

const skillsData = [
  {
    id: 1,
    image: Css,
    title: "CSS",
    disc: "Web styling",
  },
  {
    id: 2,
    image: JavaScript,
    title: "JavaScript",
    disc: "Dynamic content",
  },
  {
    id: 3,
    image: ReactJs,
    title: "ReactJS",
    disc: "UI library",
  },
  {
    id: 4,
    image: Nodejs,
    title: "Node.js",
    disc: "Backend JS",
  },
  {
    id: 5,
    image: Xpressjs,
    title: "Express.js",
    disc: "API framework",
  },
  {
    id: 6,
    image: Mongodb,
    title: "MongoDB",
    disc: "NoSQL database",
  },
  {
    id: 7,
    image: Tailwind,
    title: "Tailwind CSS",
    disc: "Utility-first CSS",
  },
  {
    id: 8,
    image: Figma,
    title: "Figma",
    disc: "Design tool",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="top-section">
        <h5>What Skills I Have</h5>
        <h2>My Expreience</h2>
      </div>
      <div className="container container_skills">
        {skillsData.map(({ id, image, title, disc }) => (
          <article key={id} className="card_skill">
            <div className="icon">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
