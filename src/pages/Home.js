import React, {useState} from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import "../styles/Home.css";
import image from "../images/foto-perfil.png";
import { FiDownload } from "react-icons/fi";
import {FaWhatsapp} from "react-icons/fa";
import MenuMobile from "../components/MenuMobile";
import Typical from "react-typical";

function Home() {
  const [data, setData] = useState('');

  const childToParent = (childdata) => {
    setData(childdata);
  }

  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <SideBar childToParent={childToParent}/>
        <section className={`main-container ${data && "active"}`}>
          <Header />
          <MenuMobile />
          <main className="main-wrapper home">
            <div className="home-content">
              <p>
                <span className="span">{"<"}</span>Olá 👋 eu sou o
              </p>
              <h1>
                Victor Mesquita <span className="span">{"/>"}</span>{" "}
              </h1>
              <Typical
                steps={[
                  "Full Stack Developer",
                  2000,
                  "Computer science Student",
                  2000,
                ]}
                loop={Infinity}
                wrapper="h2"
              />

              <div className="home-buttons">
                <a
                  href="https://gitconnected.com/victor-joness/resume"
                  target="_blank"
                  className="btn-download"
                  rel="noreferrer"
                >
                  Download CV
                  <FiDownload />
                </a>
                <a
                  href=""
                  target="_blank"
                  className="btn-pdf"
                  rel="noreferrer"
                >
                  Currículo PDF
                  <FiDownload />
                </a>
                <a
                  href="https://wa.me/5588996069203"
                  target="_blank"
                  className="btn-whats"
                  rel="noreferrer"
                >
                  Whats-app
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            <div className="home-image">
              <img
                src={image}
                alt="Foto de perfil do Victor , um jovem homem branco de cabelo castanho"
                className="image-perfil"
              />
            </div>
          </main>
        </section>
        {/* <SideBar /> */}
      </section>
      <Footer />
    </body>
  );
}

export default Home;
