import React from "react";
import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsEnvelope,
  BsChat,
} from "react-icons/bs";
import "../styles/Footer.css";/* 
import English from "../images/reino-unido.png";
import Portuguese from "../images/brasil.png"; */

function Footer() {
  return (
    <footer className="footer-container">
      <div className="links-footer">
        <p>Encontre-me em:</p>
        <a
          href="https://www.linkedin.com/in/victor-mesquita-b6a211198/"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsLinkedin className="icon-footer" />
        </a>
        <a
          href="https://github.com/victor-joness"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsGithub className="icon-footer" />
        </a>
        <a
          href="https://www.instagram.com/victor_mesquita15/"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsInstagram className="icon-footer" />
        </a>
        <a
          href="mailto:victorjonesmesquits@gmail.com"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsEnvelope className="icon-footer" />
        </a>
        <a
          href="https://wa.me/5588996069203"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsChat className="icon-footer" />
        </a>
      </div>

      <p className="text-footer">Desenvolvido com <span style={{color: "red"}}>❤</span> por Victor Mesquita</p>
      <select className="select-language">
        <option>🇧🇷 pt-BR</option>
        <option>🇺🇸 en-US</option>
      </select>
    </footer>
  );
}

export default Footer;
