import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.github.com/Kavinesh248"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/kvineshm/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin />
      </a>
      <a
        href="https://x.com/Kavinesh893390"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiTwitter />
      </a>
    </div>
  );
};

export default Social;
