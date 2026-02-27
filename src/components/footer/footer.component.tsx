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
          concise description limited to 140 characters
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
