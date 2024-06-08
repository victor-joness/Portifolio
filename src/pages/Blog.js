import React, { useState } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import posts from "../data/blog";
import "../styles/Blog.css";
import { useNavigate } from 'react-router-dom';

function Blog() {
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const childToParent = (childdata) => {
    setData(childdata);
  };

  const [typeFilter, setTypeFilter] = useState("all");
  const filterPosts = () => {
    if (typeFilter === "all") return posts;
    return posts.filter(({ categoria }) => categoria.includes(typeFilter));
  };

  const HandleClickPost = (id) => {
    navigate(`/post/${id}`);
  }

  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className={`main-container ${data && "active"}`}>
          <Header />
          <MenuMobile />
          <main className="main-wrapper posts">
            <h1 className="title-page-posts">Meu Blog...</h1>
            <div className="btn-container">
              <button
                type="button"
                className={`btn-filter ${typeFilter === "all" && "active"}`}
                onClick={() => setTypeFilter("all")}
              >
                Todos
              </button>
              <button
                type="button"
                className={`btn-filter ${
                  typeFilter === "dia_a_dia" && "active"
                }`}
                onClick={() => setTypeFilter("dia_a_dia")}
              >
                Dia a dia
              </button>
              <button
                type="button"
                className={`btn-filter ${
                  typeFilter === "noticias" && "active"
                }`}
                onClick={() => setTypeFilter("noticias")}
              >
                Notícias de Tecnologia
              </button>
              <button
                type="button"
                className={`btn-filter ${
                  typeFilter === "tutoriais" && "active"
                }`}
                onClick={() => setTypeFilter("tutoriais")}
              >
                Tutoriais
              </button>
              <button
                type="button"
                className={`btn-filter ${
                  typeFilter === "projetos_startup" && "active"
                }`}
                onClick={() => setTypeFilter("projetos_eventos")}
              >
                Projetos e Eventos
              </button>
              <button
                type="button"
                className={`btn-filter ${typeFilter === "tcc" && "active"}`}
                onClick={() => setTypeFilter("tcc")}
              >
                TCC
              </button>
            </div>
            <div className="posts-container">
              {filterPosts().map(
                (
                  {
                    categoria,
                    titulo,
                    data,
                    src,
                    repository,
                    descricao,
                    site,
                    tecnologias,
                    id
                  },
                  index
                ) => (
                  <div key={index} className="card-posts">
                    <h2 className="title-posts">{titulo}</h2>
                    <p className="data-posts">{data}</p>
                    <p>{descricao}</p>

                    <button className="button-posts" onClick={() => HandleClickPost(id)}>Ler Artigo</button>
                    <div className="img-container">
                      <img
                        src={src}
                        alt="Imagem do projeto"
                        className="img-posts"
                      />
                    </div>
                    <div className="technologies-container">
                      {tecnologias.map((tech) => (
                        <span className="span-technologies">{tech}</span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </main>
        </section>
        <SideBar childToParent={childToParent} />
      </section>
      <Footer />
    </body>
  );
}

export default Blog;
