import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import "../styles/Experencies.css";

function Experiencies() {
  const [data, setData] = useState("");

  const childToParent = (childdata) => {
    setData(childdata);
  };

  useEffect(() => {
    function hoverChangeExperience(
      nameCard,
      changeDescription,
      titleExperience,
      companyExperience,
      dateExperience
    ) {
      const varChangeDescription = document.querySelector(".changeExperience");
      const varTitleExperience = document.querySelector(".titleExperience");
      const varCompanyExperience = document.querySelector(".companyExperience");
      const varDateExperience = document.querySelector(".dateExperience");

      document.querySelector(nameCard).addEventListener("click", () => {
        varChangeDescription.innerHTML = changeDescription;
        varCompanyExperience.innerHTML = companyExperience;
        varTitleExperience.innerHTML = titleExperience;
        varDateExperience.innerHTML = dateExperience;
      });
    }

    hoverChangeExperience(
      ".fitbank",
      `Colaboro como Desenvolvedor full stack, criando novas funcionalidades no sistema de pagamentos da empresa FitBank, mantendo essas funcionalidades e atualizando funcionalidades existentes. Agregando ao time com skills tecnológicas e interpessoais, buscando constantemente a excelência e a inovação.`,
      "Desenvolvedor FullStack Jr",
      "Fitbank",
      "Out 2023 - Fev 2025 (1 ano e 5 Meses)"
    );

    hoverChangeExperience(
      ".bolsistaPaip",
      `Como bolsista para maratona de programação, adquiri experiência intensa em resolução de problemas complexos e desenvolvimento de algoritmos eficientes. Participar de competições de alto nível aprimorou minhas habilidades em programação, lógica e trabalho em equipe sob pressão. Proporcionou uma base em várias linguagens e me preparou para enfrentar desafios técnicos em um ambiente profissional.`,
      "Bolsista para maratona de programação",
      "UFC",
      "Mar 2023 - Out 2023 (8 Meses)"
    );

    /* hoverChangeExperience(
      ".contweb",
      `Realizei o estágio na ContWeb, uma empresa de contabilidade. 
      Onde pela primeira vez tive experiência com o React. Além do
      desenvolvimento frontend criei os designs da nova plataforma da empresa.`,
      "Developer frontend e UI Designer",
      "ContWeb",
      "Set 2021 - Nov 2021 (3 meses)"
    ); */

    function hoverChangeCertificados(
      nameCard,
      changeDescription,
      titleCertificados,
      companyCertificados,
      dateCertificados
    ) {
      const varChangeDescription = document.querySelector(
        ".changeCertificados"
      );
      const varTitleCertificados = document.querySelector(".titleCertificados");
      const varCompanyCertificados = document.querySelector(
        ".companyCertificados"
      );
      const varDateCertificados = document.querySelector(".dateCertificados");

      document.querySelector(nameCard).addEventListener("click", () => {
        varChangeDescription.innerHTML = changeDescription;
        varCompanyCertificados.innerHTML = companyCertificados;
        varTitleCertificados.innerHTML = titleCertificados;
        varDateCertificados.innerHTML = dateCertificados;
      });
    }

    hoverChangeCertificados(
      ".devWebCompleto",
      `Completei o curso "Desenvolvimento Web Completo", que incluiu 20 módulos distintos e a realização de 20 projetos práticos. O curso abrangeu uma ampla gama de tecnologias e práticas de desenvolvimento web, incluindo HTML, CSS, JavaScript, React, Node.js, e bancos de dados. Adquiri experiência prática na criação de sites e aplicações web responsivas e dinâmicas, além de desenvolver habilidades em design de interface, back-end, e integração de APIs. Esse curso consolidou meus conhecimentos e me preparou para enfrentar desafios reais no desenvolvimento web.`,
      "Desenvolvimento Web Completo",
      "Udemy",
      "Jun 2024 - Set 2024 (4 Meses)"
    );

    hoverChangeCertificados(
      ".javaScriptAlgoritmos",
      `Concluí o curso "JavaScript Algorithms and Data Structures" da freeCodeCamp, onde aprendi a implementar algoritmos eficientes e a utilizar estruturas de dados fundamentais com JavaScript. O curso abordou tópicos como manipulação de arrays e objetos, recursão, algoritmos de ordenação e pesquisa, e estruturas de dados como listas ligadas, árvores e grafos. Através de desafios práticos, desenvolvi habilidades sólidas em resolução de problemas e otimização de código, fortalecendo minha capacidade de escrever código limpo, eficiente e escalável.`,
      "Algoritmos e estruturas de dados em Javascript",
      "FreeCodeCamp",
      "Fev 2022 - Abr 2022 (3 Meses)"
    );

    hoverChangeCertificados(
      ".frontendDeveloper",
      `Concluí o curso "Front End Development Libraries" da freeCodeCamp, onde desenvolvi proficiência em várias bibliotecas essenciais para desenvolvimento front-end, como React, Redux, Bootstrap, jQuery, e SASS. O curso enfatizou a construção de interfaces de usuário interativas e responsivas, gerenciamento de estado de aplicações complexas, e a aplicação de práticas modernas de desenvolvimento. Completando projetos práticos, aperfeiçoei minhas habilidades em criar experiências de usuário intuitivas e dinâmicas, consolidando meu conhecimento no desenvolvimento de interfaces web robustas e eficientes.`,
      "Developer frontend e UI Designer",
      "FreeCodeCamp",
      "Jan 2023 - Fev 2023 (1 Mês)"
    );

    const header = document.getElementById("experience-company");
    const btns = header.getElementsByClassName("company");

    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("activeExperience");
        current[0].className = current[0].className.replace(
          " activeExperience",
          ""
        );
        this.className += " activeExperience";
      });
    }

    const headerc = document.getElementById("experience-companyC");
    const btnsc = headerc.getElementsByClassName("companyC");

    for (let i = 0; i < btnsc.length; i++) {
      btnsc[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("activeCertificados");
        current[0].className = current[0].className.replace(
          " activeCertificados",
          ""
        );
        this.className += " activeCertificados";
      });
    }
  }, []);

  const currentDate = () => {
    const dataInicio = new Date("2023-10-15");
    const dataAtual = new Date();

    const diffAnos = dataAtual.getFullYear() - dataInicio.getFullYear();
    let diffMeses = dataAtual.getMonth() - dataInicio.getMonth();

    const diferencaTotalMeses = diffAnos * 12 + diffMeses;

    return diferencaTotalMeses;
  };

  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className={`main-container ${data && "active"}`}>
          <Header />
          <MenuMobile />
          <main className="main-wrapper.experiencias">
            <section id="s-experience">
              <div className="grid-layout">
                <h2 className="delaySmallReveal">
                  Experiências <span>.</span>
                </h2>
                <div id="experience">
                  <div
                    className="option-experience intervalCardReveal"
                    id="experience-company"
                  >
                    <div className="company fitbank activeExperience">
                      <h3>Fitbank</h3>
                    </div>
                    <div className="company bolsistaPaip">
                      <h3>UFC</h3>
                    </div>
                    {/* <div className="company contweb">
                      <h3>ContWeb</h3>
                    </div> */}
                  </div>
                  <div className="text-experience intervalCardReveal">
                    <div>
                      <h3 className="titleExperience">
                        Desenvolvedor FullStack Jr
                      </h3>
                      <p className="dateExperience">
                        Out 2023 - Atual ({currentDate() + " Meses"})
                      </p>
                    </div>
                    <h4 className="companyExperience">Fitbank</h4>
                    <p className="changeExperience">
                      Colaboro como Desenvolvedor full stack, criando novas
                      funcionalidades no sistema de pagamentos da empresa
                      FitBank, mantendo essas funcionalidades e atualizando
                      funcionalidades existentes. Agregando ao time com skills
                      tecnológicas e interpessoais, buscando constantemente a
                      excelência e a inovação.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <main className="main-wrapper.certificados">
            <section id="s-experience-certificado">
              <div className="grid-layout">
                <h2 className="delaySmallReveal">
                  Certificados <span>.</span>
                </h2>
                <div id="experience">
                  <div
                    className="option-experience intervalCardReveal"
                    id="experience-companyC"
                  >
                    <div className="companyC devWebCompleto activeCertificados">
                      <h3>Desenvolvimento Web Completo</h3>
                    </div>
                    <div className="companyC javaScriptAlgoritmos">
                      <h3>JavaScript Algorithms and Data Structures</h3>
                    </div>
                    <div className="companyC frontendDeveloper">
                      <h3>Front End Development Libraries</h3>
                    </div>
                  </div>
                  <div className="text-experience intervalCardReveal">
                    <div>
                      <h3 className="titleCertificados">Udemy</h3>
                      <p className="dateCertificados">
                        Jun 2024 - Set 2024 (4 Meses)
                      </p>
                    </div>
                    <h4 className="companyCertificados">Udemy</h4>
                    <p className="changeCertificados">
                      Completei o curso "Desenvolvimento Web Completo", que
                      incluiu 20 módulos distintos e a realização de 20 projetos
                      práticos. O curso abrangeu uma ampla gama de tecnologias e
                      práticas de desenvolvimento web, incluindo HTML, CSS,
                      JavaScript, React, Node.js, e bancos de dados.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </section>
        <SideBar childToParent={childToParent} />
      </section>
      <Footer />
    </body>
  );
}

export default Experiencies;
