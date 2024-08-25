import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <header  className="bg-transparent md:sticky top-0 z-10">
      <div className="flex items-center justify-between p-4 lg:justify-between">
        <div className="flex items-center">
          <img
            width="60"
            height="60"
            src="https://img.icons8.com/clouds/100/r--v2.png"
            alt="r--v2"
            className="mr-4"
          />
          <a
            href="#home"
            className="title-font font-medium text-white"
          >
            <span className="ml-3 text-lg font-sans-serif text-white">
              Raj Kumar Singh
            </span>
          </a>
        </div>
        <nav className="hidden md:flex md:space-x-4">
          <a
            href="#about"
            className="rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            ABOUT
          </a>
          <a
            href="#project"
            className="rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            PROJECTS
          </a>
          <a
            href="#skills"
            className="rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            SKILLS
          </a>
        </nav>
        <div className="flex space-x-4 text-xl">
          <a
            href="https://www.linkedin.com/in/raj-kumar-singh-2a9635251/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/RajKumarSingh-in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/dark_knight_065/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-white hover:text-gray-400"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </header>
  );
}
