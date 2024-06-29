import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Experiencies from './pages/Experiencies';
import Codificando from './pages/Codificando';

import Post from "./pages/Post";
import posts from "./data/blog";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/experiences" element={<Experiencies/>}/>
        <Route path="/codificando" element={<Codificando/>}/>

        <Route path="/post/:id" element={<Post posts={posts}/>}/>
      </Routes>
    </>
  );
}

export default App;
