import React, { useState, useEffect } from 'react';
import './Sidebar.css'; // Importing CSS

const sections = [
    { id: 'section1', title: 'About Me', imageSrc: '/img/1.png' },
    { id: 'section2', title: 'Content', imageSrc: '/img/2.png' },
    { id: 'section3', title: 'Web', imageSrc: '/img/3.png' },
    { id: 'section4', title: 'Contact', imageSrc: '/img/4.png' },
  ];
  
  const Sidebar = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [hovered, setHovered] = useState(false);
  
    const scrollToSection = (sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        sections.forEach((section) => {
          const sectionElement = document.getElementById(section.id);
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
  
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div 
        className={`sidebar ${hovered ? 'hovered' : ''}`} 
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)}
      >
        {sections.map((section) => (
          <div
            key={section.id}
            className={`sidebar-item ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
          >
            <span className="sidebar-title">{section.title}</span>
            <img src={section.imageSrc} alt={section.title} className="sidebar-image" />
          </div>
        ))}
      </div>
    );
  };
  
  export default Sidebar;