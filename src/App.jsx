import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [imageSrc, setImageSrc] = useState('img/meonlemon.png');

  useEffect(() => {
    // Function to check screen width and change image accordingly
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc('img/smallmeonlemon.png');
      } else {
        setImageSrc('img/meonlemon.png');
      }
    };

    // Call the function initially when the component mounts
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container">
      <img src={imageSrc} alt="Me on the lemon" className="main-image" />
      <div className="text-content">
        <h1 className="main-heading">Feliz Pietras</h1>
        <h2 className="sub-heading">This is your H2</h2>
      </div>
    </div>
  );
}

export default App;
