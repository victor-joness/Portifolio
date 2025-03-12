import React, { useState } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import "../styles/Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [data, setData] = useState("");

  const childToParent = (childdata) => {
    setData(childdata);
  };

  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className={`main-container ${data && "active"}`}>
          <Header />
          <MenuMobile />
          <main className="main-wrapper contact">
            <h1 className="title-page-contact">Vamos conversar 🤙</h1>
            <div className="btn-container"></div>
            <div className="contact">
              <div class="icons-container">
                <div class="icons">
                  <i>
                    <FaPhone />
                  </i>
                  <div className="icons-infos">
                    <h3>Número</h3>
                    <p>+55 88 9.96069203</p>
                  </div>
                </div>
                <div class="icons">
                  <i>
                    <FaEnvelope />
                  </i>

                  <div className="icons-infos">
                    <h3>Email</h3>
                    <a
                      class="email-text"
                      href="mailto:victorjonesmesquits@gmail.com"
                    >
                      <p>victorjonesmesquits@gmail.com</p>
                    </a>
                  </div>
                </div>
                <div class="icons">
                  <i>
                    <FaMapMarkerAlt />
                  </i>
                  <div className="icons-infos">
                    <h3>Localização</h3>
                    <p>Ceará, Brasil</p>
                    <p>Remoto, Mundo</p>
                  </div>
                </div>
              </div>

              <div class="row">
                <form
                  action="https://formsubmit.co/victorjonesmesquits@gmail.com"
                  method="POST"
                >
                  <input
                    type="text"
                    placeholder="Nome"
                    class="box"
                    name="name"
                    required
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    class="box"
                    name="email"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Numero"
                    class="box"
                    name="number"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Mensagem"
                    class="box"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                  <button type="submit" class="btn">
                    Enviar{" "}
                  </button>
                </form>
              </div>
            </div>
          </main>
        </section>
        <SideBar childToParent={childToParent} />
      </section>
      <Footer />
    </body>
  );
}

export default Contact;
