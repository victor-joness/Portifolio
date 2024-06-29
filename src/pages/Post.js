import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import "../styles/post.css";

const Post = ({ posts }) => {
  const [data, setData] = useState("");

  const childToParent = (childdata) => {
    setData(childdata);
  };

  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  console.log(post);

  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className={`main-container ${data && "active"}`}>
          <Header />
          <MenuMobile />
          <main className="main-wrapper codificando">
            {!post ? (
              <div className="post-nao-encontrado">Post não encontrado</div>
            ) : (
              <div className="post-container">
                <div class="post-img">
                  <img src={post.src} alt="Imagem do post" />
                </div>
                <div className="post-titulo">{post.titulo}</div>
                <div className="post-info">
                  <p>
                    {post.autor} - {post.data} -{" "}
                    <span style={{ color: "var(--red-100)" }}>
                      {post.tempo_de_leitura}
                    </span>{" "}
                    de Leitura
                  </p>
                </div>
                <div className="post-categoria">
                  <div className="technologies-container">
                    {post.tecnologias.map((tech) => (
                      <span className="span-technologies">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="post-texto">
                  <strong style={{fontSize: "20px"}}>{post.title_parte1}</strong>
                  <p>{post.texto_parte1}</p>
                  <br />
                  {post.texto_img_parte1 ? (
                    <img
                      src={post.texto_img_parte1}
                      alt="Imagem da parte 1 do texto"
                    />
                  ) : (
                    <br />
                  )}
                  <strong style={{fontSize: "20px"}}>{post.title_parte2}</strong>
                  <p>{post.texto_parte2}</p>
                  <br />
                  {post.texto_img_parte2 ? (
                    <img
                      src={post.texto_img_parte2}
                      alt="Imagem da parte 2 do texto"
                    />
                  ) : (
                    <br />
                  )}
                  <strong style={{fontSize: "20px"}}>{post.title_parte3}</strong>
                  <p>{post.texto_parte3}</p>
                  {post.texto_img_parte3 ? (
                    <img
                      className="post-img-texto"
                      src={post.texto_img_parte3}
                      alt="Imagem da parte 3 do texto"
                    />
                  ) : (
                    <br />
                  )}
                </div>
                <div className="post-footer">
                  <p>Obrigado pela Leitura</p>
                  <p>Victor Mesquita</p>
                </div>
              </div>
            )}
          </main>
        </section>
        <SideBar childToParent={childToParent} />
      </section>
      <Footer />
    </body>
  );
};

export default Post;
