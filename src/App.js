import React, { useState } from 'react';
import { Moon, Sun, Camera, Instagram, Twitter } from 'lucide-react';
import PortfolioItem from './components/PortfolioItem';
import RollingText from './components/RollingText';
import './App.css'; // For any custom styles

const FashionPortfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const portfolioItems = [
    { imageSrc: "/images/Miscellaneous/samp.jpeg", title: "Miscellaneous" },
    { imageSrc: "/images/Branding/hero.JPG", title: "Branding" },
    { imageSrc: "/images/visual/hero.png", title: "Visual Merchandising" },
    { imageSrc: "/images/photography/hero.jpeg", title: "Photography Series" },
    { imageSrc: "/images/Graphics/hero.JPG", title: "Graphic Design Work" },
    { imageSrc: "/images/illustrations/hero.JPG", title: "Branding Project" },
  ];

  const roles = [
    "Web Designer",
    "UI/UX Designer",
    "Visual Merchandiser",
    "Photographer",
    "Graphic Designer"
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-pink-50 to-purple-100 text-gray-800'}`}>
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-6">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Soumya Vatsa</h1>
          <nav className="flex items-center">
            <ul className="flex space-x-6 mr-6">
              <li><a href="#portfolio" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>Portfolio</a></li>
              <li><a href="#about" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>About</a></li>
              <li><a href="#contact" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>Contact</a></li>
            </ul>
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="hero" 
  className="mb-16 text-center flex flex-col items-center justify-center" 
  style={{ height: '40vh' }}>
          <h2 className={`mb-4 text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`} style={{ height: '10vh' }}>
            <RollingText texts={roles} />
          </h2>
          <p className={`mb-8 text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Bringing creativity to life through multiple disciplines
          </p>
          <a href="#portfolio" className={`rounded-full px-6 py-3 text-white shadow-lg transition-colors duration-300 ${darkMode ? 'bg-purple-700 hover:bg-purple-800' : 'bg-purple-600 hover:bg-purple-700'}`}>
            Explore Portfolio
          </a>
        </section>

        <section id="portfolio" className="mb-16">
          <h2 className={`mb-8 text-center text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Portfolio</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <PortfolioItem key={index} imageSrc={item.imageSrc} title={item.title} />
            ))}
          </div>
        </section>

        <section id="about" className="mb-16">
          <h2 className={`mb-8 text-center text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>About Soumya Vatsa</h2>
          <div className="flex flex-col items-center md:flex-row">
            <img src="/images/hero.jpg" alt="Jane Doe" className="mb-8 h-64 w-64 rounded-full object-cover shadow-lg md:mb-0 md:mr-8" />
            <div className="text-center md:text-left">
              <p className={`mb-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              As a fashion communication designer, I specialize in creating impactful visual narratives that blend fashion, design, and storytelling. With a keen eye for aesthetics and trends, I bring together my expertise in photography, graphic design, visual merchandise , branding, and digital media to craft cohesive and innovative communication strategies. My work emphasizes sustainability, sensory experiences, and consumer engagement, reflecting my passion for both traditional and contemporary design elements. 
              </p>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Through this portfolio, I aim to showcase my ability to build meaningful connections between brands and their audiences.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center">
          <h2 className={`mb-8 text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Get in Touch</h2>
          <p className={`mb-8 text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Interested in collaborations or custom projects? Let's connect!</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-purple-600'}`}>
              <Camera size={24} />
            </a>
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-purple-600'}`}>
              <Instagram size={24} />
            </a>
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-purple-600'}`}>
              <Twitter size={24} />
            </a>
          </div>
        </section>
      </main>

      <footer className={`py-6 text-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>© 2024 Jane Doe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FashionPortfolio;
