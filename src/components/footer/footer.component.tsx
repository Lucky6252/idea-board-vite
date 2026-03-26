import IdeaLogo from "../../assets/IdeaLogo.svg";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex gap-10 p-5 bg-[#36393F]">
      <div className="flex flex-col w-40 gap-2 place-items-center">
        <img className="size-15" src={IdeaLogo} alt="Idea Board Logo" />
        <h3 className="text-l text-gray-50 font-bold">Idea Board</h3>
      </div>
      <div className="text-center w-500">
        <p className="text-gray-50 font-arial text-xs">
          Our Idea Board is a simple yet powerful collaborative space designed
          to help individuals and teams capture, refine, and manage their ideas
          efficiently in one centralized platform. Using a clear title and a
          concise description limited to 140 characters <span className="hidden lg:inline">,allowing for quick and focused expression
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
      <div className="flex  flex-col place-items-center">
        <p className="text-gray-50 text-center">© 2025 developed by Lucky</p>
        <a href="https://github.com/Lucky6252/idea-board">
          <FaGithub className="text-gray-50" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
