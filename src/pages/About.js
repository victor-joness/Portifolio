import React, { useState } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import "../styles/About.css";
import IconCloud from "../components/IconCloud";

function About() {
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
          <main className="main-wrapper about">
            <div className="about-container">
              <span className="span-tag html">{"<html>"}</span>
              <br />
              <span className="span-tag body">{"<body>"}</span>
              <br />
              <span className="span-tag content">{"<h1>"}</span>
              <h1 className="title-about">Olá,</h1>
              <span className="span-tag content">{"</h1>"}</span>
              <br />
              <span className="span-tag content">{"<p>"}</span>
              <p className="text-about">
                Meu nome é{" "}
                <span className="span-highlight">Victor Mesquita</span>, um
                entusiasta em solucionar problemas por meio da programação.
                Atualmente, estou cursando Ciências da Computação e já me
                aventuro como{" "}
                <span className="span-highlight">
                  {" "}
                  Desenvolvedor Full Stack Jr.{" "}
                </span>
              </p>
              <p className="text-about">
                Meu objetivo principal é impactar positivamente a vida das
                pessoas, criando aplicações{" "}
                <span className="span-highlight">acessíveis e funcionais.</span>{" "}
                Tenho experiência em lidar com desafios complexos e prazos
                apertados, colaborando em projetos tanto internos quanto
                comunitários.
              </p>
              <p className="text-about last">
                Minhas habilidades incluem{" "}
                <span className="span-highlight">
                  HTML, CSS, JavaScript, ReactJS, Redux, ContextAPI, Hooks,
                  Node.js, C#, .NET, MySQL, Jest e Git/GitHub.
                </span>{" "}
                Estou sempre buscando aprender e aprimorar minhas habilidades
                para oferecer soluções cada vez mais eficazes.
              </p>
              <br />
              <p className="text-about last">
                Estou ansioso para contribuir com projetos empolgantes e fazer
                parte de equipes que compartilhem minha paixão pelo
                desenvolvimento de software de qualidade.
              </p>
              <span className="span-tag content">{"</p>"}</span>
              <br />
              <span className="span-tag body">{"</body>"}</span>
              <br />
              <span className="span-tag html">{"</html>"}</span>
            </div>
            <IconCloud />
          </main>
        </section>
        <SideBar childToParent={childToParent} />
      </section>
      <Footer />
    </body>
  );
}

export default About;
