import "./footer.styles.css";
import IdeaLogo from "../../assets/IdeaLogo.svg";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={IdeaLogo} alt="Idea Board Logo" />
        <h3>Idea Board</h3>
      </div>
      <div className="app-description">
        <p>
          Our Idea Board is a simple yet powerful collaborative space designed
          to help individuals and teams capture, refine, and manage their ideas
          efficiently in one centralized platform. Using a clear title and a
          concise description limited to 140 characters <span className="extra-text">,allowing for quick and focused expression
          of thoughts, while full editing functionality ensures ideas can be
          updated and improved at any time. The application securely saves all
          information directly in the browser’s local storage, meaning users’
          ideas remain available even after closing or refreshing the app,
          without the need for account creation or internet dependency. This
          makes the platform fast, private, and reliable for everyday use. The
          Idea Board promotes creativity, productivity, and structured thinking
          by helping users organize concepts, prevent loss of inspiration, and
          turn brief ideas into meaningful actions for personal, academic, or
          business purposes. As Version 1.0 represents the foundation of this
          product, continuous updates and feature enhancements are planned to
          further improve usability, performance, and overall value for users in
          future releases.</span>
        </p>
      </div>
      <div className="copywrite-details">
        <p>© 2025 developed by Lucky</p>
        <a href="https://github.com/Lucky6252/idea-board">
          <FaGithub className="git-button" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
