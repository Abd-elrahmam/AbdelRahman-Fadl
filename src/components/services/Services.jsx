import "./services.css";
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

function Services() {
  return (
    <section id="services" className="">
      <div className="top-section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container_services">
        <article className="card">
          <MdDesignServices className="icon" />
          <h3>Creative Design</h3>
          <p className="text-light">
            Bringing ideas to life with stunning visuals.
          </p>
        </article>
        <article className="card active">
          <IoIosRocket className="icon" />
          <h3>Fast Performance</h3>
          <p className="text-light">
            {" "}
            Ensuring high-speed performance and seamless functionality for a
            smooth user experience.
          </p>
        </article>
        <article className="card">
          <FaCode className="icon" />
          <h3>Web Development</h3>
          <p className="text-light">Building modern and responsive websites.</p>
        </article>
      </div>
    </section>
  );
}

export default Services;
