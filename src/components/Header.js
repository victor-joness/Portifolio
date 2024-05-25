import React from "react";
import '../styles/Header.css';
import MenuBar from "../components/MenuBar";
import react_icon from '../images/react_icon.svg'
import js_icon from '../images/js_icon.svg'
import html_icon from '../images/html_icon.svg'
import css_icon from '../images/css_icon.svg'
import json_icon from '../images/json_icon.svg'
import csharp_icon from '../images/Csharp_icon.svg'
import py_icon from '../images/py_icon.svg'

function Header() {
  return ( 
    <header className="header-container">
      <nav className="nav-container">
        <MenuBar 
          icon={ react_icon }
          name='home.jsx'
          path="/"
        /> 
        <MenuBar 
          icon={ html_icon }
          name='sobre.html'
          path="/about"
        />
        <MenuBar 
          icon={ js_icon }
          name='projetos.js'
          path="/projects"
        />
        <MenuBar 
          icon={ json_icon }
          name='blog.json'
          path="/blog"
        /> 
        <MenuBar 
          icon={ csharp_icon }
          name='Experiências.cs'
          path="/experiences"
        />
        <MenuBar 
          icon={ css_icon }
          name='contato.css'
          path="/contact"
        /> 
        <MenuBar 
          icon={ py_icon }
          name='codificando_soluções.py 🚧'
          path="/codificando"
        /> 
      </nav>
    </header>
  );
}

export default Header;