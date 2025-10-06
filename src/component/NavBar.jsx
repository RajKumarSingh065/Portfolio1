import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import logo from "../assets/reshot-icon-gazelle.svg";
import { RESUME } from "../constants/index";

export default function NavBar() {
  return (
    <header  className="bg-transparent md:sticky top-0 z-10">
      <div className="flex items-center justify-between p-4 lg:justify-between">
        <div className="flex items-center">
          <img
            width="60"
            height="60"
            src={logo}
            alt="logo"
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
            href="#skills"
            className="rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            SKILLS
          </a>
          <a
            href="#project"
            className="rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            PROJECTS
          </a>
          <a
            href="#social"
            className="rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            SOCIAL
          </a>
          <a
            href="#contact"
            className="rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            CONTACT
          </a>
        </nav>
        <div className="flex items-center space-x-4 text-xl">
          <a
            href="https://www.linkedin.com/in/rajkumarsingh-in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/RajKumarSingh065/"
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
          {RESUME?.driveFileId ? (
            <a
              href={`https://drive.google.com/uc?export=download&id=${RESUME.driveFileId}`}
              className="ml-2 text-sm rounded-md px-4 py-2 font-semibold text-white bg-purple-600 hover:bg-purple-500 border border-purple-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
            >
              Resume
            </a>
          ) : null}
        </div>
      </div>
    </header>
  );
}
