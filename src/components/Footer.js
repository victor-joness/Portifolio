import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import '../styles/Footer.css';
// import English from '../images/kingdom_united_icon.png';
// import Portuguese from '../images/brazil_icon.png';

function Footer() {
  return ( 
    <footer className="footer-container">
      <div className="links-footer">
        <p>Encontre-me em:</p>
        <a href="https://www.linkedin.com/in/victor-mesquita-b6a211198/" 
          target="_blank" 
          className="icon-container" 
          rel="noreferrer"
        >
          <BsLinkedin className="icon-footer"/>
        </a>
        <a href="https://github.com/victor-joness" 
          target="_blank" 
          className="icon-container" 
          rel="noreferrer"
        >
          <BsGithub className="icon-footer"/>
        </a>
      </div>
      
      <p className="text-footer">Desenvolvido com ❤ por Victor Mesquita</p>
      {/* <select className="select-language">
        <option>🇧🇷 pt-BR</option>
        <option>🇺🇸 en-US</option>
      </select> */}
    </footer>
  );
}

export default Footer;