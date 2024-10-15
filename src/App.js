import React, { useState, useEffect } from 'react';
import { Moon, Sun, Instagram, Linkedin } from 'lucide-react';
import PortfolioItem from './components/PortfolioItem';
import RollingText from './components/RollingText';
import ImageSlideShow from './components/ImageSlideShow';
import { motion, useAnimation } from 'framer-motion';

const FashionPortfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const backgroundControls = useAnimation();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    backgroundControls.start({
      y: [0, -200],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  }, [backgroundControls]);

  const portfolioItems = [
    {
      title: "Branding",
      images: [
        { src: "/images/Branding/hero.JPG", description: "" },
        { src: "/images/Branding/hero1.JPG", description: "" },
        { src: "/images/Branding/hero2.jpg", description: "" },
        { src: "/images/Branding/hero3.jpg", description: "" },
        { src: "/images/Branding/hero4.jpeg", description: "" },
      ]
    },
    {
      title: "Visual Merchandising",
      images: [
        { src: "/images/visual/hero.PNG", description: "" },
        { src: "/images/visual/hero2.PNG", description: "" },
      ]
    },
    {
      title: "Photography",
      images: [
        { src: "/images/photography/hero.jpeg", description: "" },
        { src: "/images/photography/hero (1).JPG", description: "" },
        { src: "/images/photography/hero (2).jpeg", description: "" },
        { src: "/images/photography/hero (2).JPG", description: "" },
        { src: "/images/photography/hero (3).jpeg", description: "" },
        { src: "/images/photography/hero (3).JPG", description: "" },
        { src: "/images/photography/hero (4).jpeg", description: "" },
        { src: "/images/photography/hero (4).JPG", description: "" },
        { src: "/images/photography/hero (5).jpeg", description: "" },
        { src: "/images/photography/hero (5).JPG", description: "" },
        { src: "/images/photography/hero (6).jpeg", description: "" },
        { src: "/images/photography/hero (6).JPG", description: "" },
        { src: "/images/photography/hero (8).JPG", description: "" },
        { src: "/images/photography/hero (9).JPG", description: "" },
      ]
    },
    {
      title: "Graphic Design",
      images: [
        { src: "/images/Graphics/hero.JPG", description: "" },
        { src: "/images/Graphics/hero1.JPG", description: "" },
        { src: "/images/Graphics/hero2.JPG", description: "" },
        { src: "/images/Graphics/hero3.JPG", description: "" },
        { src: "/images/Graphics/hero4.JPG", description: "" },
        { src: "/images/Graphics/hero5.JPG", description: "" },
        { src: "/images/Graphics/hero6.jpg", description: "" },
        { src: "/images/Graphics/hero10.jpeg", description: "" },
      ]
    },
    {
      title: "Illustrations",
      images: [
        { src: "/images/illustrations/hero.JPG", description: "" },
        { src: "/images/illustrations/hero1.PNG", description: "" },
        { src: "/images/illustrations/hero2.JPG", description: "" },
        { src: "/images/illustrations/hero3.PNG", description: "" },
        { src: "/images/illustrations/hero4.PNG", description: "" },
        { src: "/images/illustrations/hero5.PNG", description: "" },
      ]
    },
    {
      title: "Miscellaneous",
      images: [
        { src: "/images/Miscellaneous/hero.jpg", description: "" },
        { src: "/images/Miscellaneous/hero1.jpeg", description: "" },
        { src: "/images/Miscellaneous/hero2.jpeg", description: "" },
        { src: "/images/Miscellaneous/hero3.jpeg", description: "" },
        { src: "/images/Miscellaneous/hero4.jpeg", description: "" },
      ]
    },
  ];

  const roles = [
    "Web Designer",
    "UI/UX Designer",
    "Visual Merchandiser",
    "Photographer",
    "Graphic Designer"
  ];

  return (
    <div className={`min-h-screen scroll-smooth ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-pink-50 to-purple-100 text-gray-800'}`}>
      <header className={`fixed w-full z-20 transition-all duration-300 ${scrollY > 50 ? 'bg-opacity-90 backdrop-blur-sm' : ''} ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <h1 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Soumya Vatsa</h1>
          <nav className="flex items-center mt-4 w-full sm:mt-0 sm:w-auto">
            <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mr-4 sm:mr-6 w-full sm:w-auto">
              <li><a href="#portfolio" className={`text-sm sm:text-base ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>Portfolio</a></li>
              <li><a href="#about" className={`text-sm sm:text-base ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>About</a></li>
              <li><a href="#contact" className={`text-sm sm:text-base ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>Contact</a></li>
            </ul>
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
        </div>
      </header>
      
      <main className="z-0 container mx-auto px-4 overflow-hidden">
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10"
          >
            <h2 className={`mb-4 text-3xl sm:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <RollingText texts={roles} />
            </h2>
            <p className={`mb-8 text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Bringing creativity to life through multiple disciplines
            </p>
            <a 
              href="#portfolio" 
              className={`inline-block rounded-full px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-purple-700 hover:bg-purple-800' : 'bg-purple-600 hover:bg-purple-700'}`}
            >
              Explore Portfolio
            </a>
          </motion.div>
          <motion.div 
            className="absolute inset-0 z-0"
            animate={backgroundControls}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 opacity-20" style={{ height: '200%' }}>
              {portfolioItems.flatMap(item => item.images.slice(0, 2)).map((image, index) => (
                <img key={index} src={image.src} alt="" className="w-full h-full object-cover" />
              ))}
              {portfolioItems.flatMap(item => item.images.slice(0, 2)).map((image, index) => (
                <img key={`repeat-${index}`} src={image.src} alt="" className="w-full h-full object-cover" />
              ))}
            </div>
          </motion.div>
        </section>

        <section id="portfolio" className="py-20 -mt-10 sm:mt-10">
          <h2 className={`mb-12 text-center text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Portfolio</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PortfolioItem 
                  title={item.title} 
                  imageSrc={item.images[0].src}
                  onClick={() => setSelectedCategory(item)}
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="py-20">
          <h2 className={`mb-12 text-center text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>About Soumya Vatsa</h2>
          <div className="flex flex-col items-center md:flex-row">
            <motion.img 
              src="/images/hero.jpg" 
              alt="Soumya Vatsa" 
              className="mb-8 h-48 w-48 sm:h-64 sm:w-64 rounded-full object-cover shadow-lg md:mb-0 md:mr-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className={`mb-4 text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                As a fashion communication designer, I specialize in creating impactful visual narratives that blend fashion, design, and storytelling. With a keen eye for aesthetics and trends, I bring together my expertise in photography, graphic design, visual merchandise, branding, and digital media to craft cohesive and innovative communication strategies.
              </p>
              <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                My work emphasizes sustainability, sensory experiences, and consumer engagement, reflecting my passion for both traditional and contemporary design elements. Through this portfolio, I aim to showcase my ability to build meaningful connections between brands and their audiences.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20 text-center">
          <h2 className={`mb-8 text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Get in Touch</h2>
          <p className={`mb-8 text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Interested in collaborations or custom projects? Let's connect!</p>
          <div className="flex justify-center space-x-8">
            <a href="https://www.instagram.com/soumyavatsa25/profilecard/?igsh=cGYzeWNmbDkxdms5" className={`text-3xl ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-purple-600'}`}>
              <Instagram size={32} />
            </a>
            <a href="https://www.linkedin.com/in/soumya-vatsa-371933328/" className={`text-3xl ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-purple-600'}`}>
              <Linkedin size={32} />
            </a>
          </div>
        </section>
      </main>

      <footer className={`py-8 text-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>© 2024 Soumya Vatsa. All rights reserved.</p>
      </footer>
      {selectedCategory && (
        <ImageSlideShow 
          images={selectedCategory.images} 
          onClose={() => setSelectedCategory(null)} 
        />
      )}
    </div>
  );
};

export default FashionPortfolio;