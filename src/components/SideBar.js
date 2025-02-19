import React, { useState } from "react";
import "../styles/SideBar.css";
import react_icon from "../images/react_icon.svg";
import js_icon from "../images/js_icon.svg";
import html_icon from "../images/html_icon.svg";
import css_icon from "../images/css_icon.svg";
import json_icon from "../images/json_icon.svg";
import csharp_icon from "../images/Csharp_icon.svg";
import py_icon from "../images/py_icon.svg";
import mongodb_icon from "../images/mongodb_icon.svg";
import { Link } from "react-router-dom";

function SideBar({childToParent}) {
  const [open, setOpen] = useState(false);

  const handlebutton = () => {
    setOpen(!open);
    childToParent(open);
  }

  return (
    <aside className={`side-bar-container ${open && "active"}`}>
      <div className="explore-title">
        <button
          type="button"
          className={`explore-button ${open && "active"}`}
          onClick={() => handlebutton()}
        >
          <svg
            class="hamburger-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M21 18H3a1 1 0 010-2h18a1 1 0 010 2zm0-7H3a1 1 0 010-2h18a1 1 0 010 2zm0-7H3a1 1 0 010-2h18a1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>

      {open ? (
        <>
          <div className="explore-portfolio">
            <p>Portfolio</p>
          </div>
          <Link to="/" className="explorer-file">
            <img src={react_icon} alt="icon" className="icon-side-bar" />
            <p>home.jsx</p>
          </Link>
          <Link to="/about" className="explorer-file">
            <img src={html_icon} alt="icon" className="icon-side-bar" />
            <p>sobre.html</p>
          </Link>
          <Link to="/projects" className="explorer-file">
            <img src={js_icon} alt="icon" className="icon-side-bar" />
            <p>projetos.js</p>
          </Link>
          <Link to="/blog" className="explorer-file">
            <img src={json_icon} alt="icon" className="icon-side-bar" />
            <p>blog.json</p>
          </Link>
          <Link to="/experiences" className="explorer-file">
            <img src={csharp_icon} alt="icon" className="icon-side-bar" />
            <p>Experiências.cs</p>
          </Link>
          <Link to="/contact" className="explorer-file">
            <img src={css_icon} alt="icon" className="icon-side-bar" />
            <p>contato.css</p>
          </Link>
          <Link to="/codificando" className="explorer-file">
            <img src={py_icon} alt="icon" className="icon-side-bar" />
            <p>codificando.py</p>
          </Link>
          <Link to="/nexusTech" className="explorer-file">
            <img src={mongodb_icon} alt="icon" className="icon-side-bar" />
            <p>NexusTech.Md</p>
          </Link>
        </>
      ) : (
        <></>
      )}
    </aside>
  );
}

export default SideBar;
