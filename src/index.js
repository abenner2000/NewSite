import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Subheader from './Subheader'
import Home from './Home';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import About from './About';
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /> <Subheader type="base"/> <Home /></>} />
        <Route path="/experience" element={<><Header /> <Subheader type="base"/> <Experience /></>} />
        <Route path="/education" element={<><Header /> <Subheader type="education"/> <Education /></>} />
        <Route path="/projects" element={<><Header /> <Subheader type="projects" /><Projects /></>} />
        <Route path="/about" element={<><Header /> <Subheader type="base"/> <About /></>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
