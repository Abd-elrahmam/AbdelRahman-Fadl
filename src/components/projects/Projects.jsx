import "./projects.css";
import Img1 from "../../assets/guess.png";
import Img2 from "../../assets/dash.png";
import Img3 from "../../assets/fadl.png";
import Img4 from "../../assets/Juicy.png";
// import Img5 from "../../assets/todo.png";

const portfolioData = [
  {
    id: 1,
    image: Img1,
    title: "Guess The Word",
    github: "https://github.com/Abd-elrahmam/Guess-The-Word.git",
    demo: "https://abd-elrahmam.github.io/Guess-The-Word/",
  },
  {
    id: 2,
    image: Img2,
    title: "Dashboard",
    github: "https://github.com/Abd-elrahmam/Dashboard1.git",
    demo: "https://abd-elrahmam.github.io/Dashboard1/",
  },
  {
    id: 3,
    image: Img3,
    title: "Elfadl",
    github: "https://github.com/Abd-elrahmam/template-3.git",
    demo: "https://abd-elrahmam.github.io/template-3/",
  },
  {
    id: 4,
    image: Img4,
    title: "Juice",
    github: "https://github.com/Abd-elrahmam/Juicy.git",
    demo: "https://abd-elrahmam.github.io/Juicy/",
  },

];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="top-section">
        <h5>My Recnt Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="container projects_container">
        {portfolioData.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item_img">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>

            <div className="portfolio_icon_btns">
              <a href={github} target="_blanK" className="btn">
                Github
              </a>
              <a href={demo} target="_blanK" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
