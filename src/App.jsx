import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { portfolioConfig } from './portfolio.config';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyPage from './components/CaseStudyPage';

// Home Page Component
const HomePage = () => {
  const { personalInfo, hero, about, projects } = portfolioConfig;

  return (
    <>
      <Hero data={hero} personalInfo={personalInfo} />
      <About data={about} />
      <Projects projects={projects} />
      <Contact personalInfo={personalInfo} />
    </>
  );
};

// Main App Component
function App() {
  const { personalInfo } = portfolioConfig;

  return (
    <BrowserRouter basename="/olha-portfolio/">
      <div className="app">
        <Navbar personalInfo={personalInfo} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<CaseStudyPage />} />
          </Routes>
        </main>
        <Footer personalInfo={personalInfo} />
      </div>
    </BrowserRouter>
  );
}

export default App;
