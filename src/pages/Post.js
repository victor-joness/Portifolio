import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";

const Post = ({ posts }) => {
  const [data, setData] = useState("");

  const childToParent = (childdata) => {
    setData(childdata);
  };

  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className={`main-container ${data && "active"}`}>
          <Header />
          <MenuMobile />
          <main className="main-wrapper codificando">
            <h1>EM CONSTRUÇÃO 🚧🚧🚧</h1>
          </main>
        </section>
        <SideBar childToParent={childToParent} />
      </section>
      <Footer />
    </body>
  );
};

export default Post;
