import React, { useState } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import "../styles/Contact.css";
import contacts from "../data/contacts";

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
            <div className="btn-container">
              
            </div>
            {/* <div className="list-contact">
              <p className="class-name line">
                .contatos<span className="element">{" {"}</span>
              </p>
              {contacts.map(({ social, href, text }) => (
                <p className="key-name line" key={social}>
                  {social}:
                  <a href={href} target="_blank" rel="noreferrer">
                    {text}
                  </a>
                  ;
                </p>
              ))}
              <p className="element line">{"}"}</p>
            </div> */}
          </main>
        </section>
        <SideBar childToParent={childToParent} />
      </section>
      <Footer />
    </body>
  );
}

export default Contact;
