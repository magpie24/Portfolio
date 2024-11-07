import React from 'react';
import TikTokSection from './components/TikTokSection';
import './App.css';

// Importing Images, Components, Icons
import lemonImage from '/img/lemon.png';
import pomeloImage from '/img/pomelo.png';
import img1 from '/img/1.png';  
import img2 from '/img/2.png';
import img3 from '/img/3.png';
import img4 from '/img/4.png';
import alsomeImage from '/img/alsome.png';
import sitImage from '/img/sit.png';
import ProjectCard from './components/ProjectCard';
import onedayatatimeImage from '/img/onedayatatime.png';
import moveyourbodyImage from '/img/moveyourbody.png';
import felizpietras from '/img/felizpietras.png';
import quotiaImage from '/img/quotia.png';
import petparadise from '/img/petparadise.png';
import boardgames from '/img/boardgames.png';
import footer from '/img/footer.png';
import footermobile from '/img/footermobile.png';
import usmiech from '/img/usmiech.png';
import './components/ProjectCard.css';
import Sidebar from './components/SideBar';
import { FaLinkedin, FaTiktok, FaInstagram } from 'react-icons/fa';

// Landing Page
function App() {
  const [imageSrc, setImageSrc] = React.useState('img/meonlemon.png');
  const lemonRef = React.useRef(null);
  const pomeloRef = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc('img/smallmeonlemon.png');
      } else {
        setImageSrc('img/meonlemon.png');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (window.innerWidth <= 768) {
            lemonRef.current.classList.add('mobile-move-left');
            pomeloRef.current.classList.add('mobile-move-right');
          } else {
            lemonRef.current.classList.add('move-left');
            pomeloRef.current.classList.add('move-right');
          }
        } else {
          if (window.innerWidth <= 768) {
            lemonRef.current.classList.remove('mobile-move-left');
            pomeloRef.current.classList.remove('mobile-move-right');
          } else {
            lemonRef.current.classList.remove('move-left');
            pomeloRef.current.classList.remove('move-right');
          }
        }
      });
    }, options);

    const section = document.querySelector('.lemon-pomelo-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      {/* Keywords */}
      <div className="container">
        <img src={imageSrc} alt="Me on the lemon" className="main-image" />
        <div className="text-content">
          <h1 className="main-heading1">FELIZ PIETRAS</h1>
          <h2 className="sub-heading">Content Creator <br></br>
            Web Developer <br></br>
            Based in Aarhus
          </h2>
        </div>
      </div>

      {/* Lemon and Pomelo Section - Introduction */}
      <div id="section1" className="section"></div>
      <div className="lemon-pomelo-section">
        <img ref={lemonRef} src={lemonImage} alt="Lemon" className="side-image initial left-image" />
        <div className="center-content">
          <h2 className="center-heading">Welcome to My Portfolio</h2>
          <p className="center-paragraph">
          Hi, I’m Magdalena—though in the digital world, you’ll know me as Feliz (Spanish for happy).
           By digital world, I especially mean TikTok and Instagram, where I create content for my 
           social media profiles @feliznailz_. My passion is creating trendy short videos! I absolutely
            love it! Aside from that, I design and code websites. With my extensive knowledge of social
             media and strong skills in web design and development, I know how to create a powerful brand
              image for companies and effectively manage their online presence.
              Sounds interesting?<br></br>
              Here is more about my work values!
          </p>
        </div>
        <img ref={pomeloRef} src={pomeloImage} alt="Pomelo" className="side-image initial right-image" />
      </div>

      
       {/* My Values - Image Heading Section and Alsome Image */}
       <div className="combined-section">
        <div className="image-heading-section">
          <div className="image-heading-container">
            <img src={img1} alt="Quarter of Lemon" className="section-image" />
            <div className="text-content-container">
              <h2 className="section-heading">Independent</h2>
              <p className="section-paragraph">
                From idea to production, I organize my work effectively to reach goals. <br></br>
                I am self-driven and focus on making the highest quality solution. Always.
              </p>
            </div>
          </div>
          <div className="image-heading-container">
            <img src={img2} alt="Quarter of Lemon" className="section-image" />
            <div className="text-content-container">
              <h2 className="section-heading">Fast-thinking & Flexible</h2>
              <p className="section-paragraph">
              Changes are inevitable, so instead of resisting them, I focus on how to leverage them to benefit my work. In the fast-paced digital world, I stay up to date with trends and the latest tech innovations. 
              </p>
            </div>
          </div>
          <div className="image-heading-container">
            <img src={img3} alt="Half of lemon" className="section-image" />
            <div className="text-content-container">
              <h2 className="section-heading">Open-minded</h2>
              <p className="section-paragraph">
                I love to unlearn, learn and relearn. For me it is a powerful tool to stay open-minden and soak in the knwoledge
                and new perspectives, rather than staying with the safe formulas that don't bring benefits. 
              </p>
            </div>
          </div>
          <div className="image-heading-container">
            <img src={img4} alt="A full lemon" className="section-image" />
            <div className="text-content-container">
              <h2 className="section-heading">Reliable</h2>
              <p className="section-paragraph">
                You can count on me and I will count on you. 
              </p>
            </div>
          </div>
        </div>
        <img src={alsomeImage} alt="Magdalena Pietras" className="alsome-image" />
      </div>

    {/* COntent */}

    <div id="section2" className="section"></div>
    <div className="main-section">
      <h1 className="main-heading">Content Creation</h1>
      <p className="main-paragraph">
      I am passionate about showcasing brands' values and brand image through content creation.
       I think content creation is a very powerful tool, and I love using all of its assets.
      </p>

      {/* This section is under construction */}

      {/* <div className="circle-container">
        <div className="circle-item">
          <div className="circle"></div>
          <h2>Heading 1</h2>
        </div>
        <div className="circle-item">
          <div className="circle"></div>
          <h2>Heading 2</h2>
        </div>
        <div className="circle-item">
          <div className="circle"></div>
          <h2>Heading 3</h2>
        </div>
        <div className="circle-item">
          <div className="circle"></div>
          <h2>Heading 4</h2>
        </div>
        <div className="circle-item">
          <div className="circle"></div>
          <h2>Heading 5</h2>
        </div>
      </div> */}
    </div>
  

    <TikTokSection />

     {/* New Section: Block of Text - Image - Block of Text */}
     <div id="section3" className="section"></div>
     <section className="text-image-section">
        <h1 className="center-title">Web Development</h1>
        <div className="text-image-container">
          <div className="text-block">
            <p>I design and code functional and intuitive websites. And ... I love commenting my code. <br></br><br></br>
              Technologies I work with: <br></br>
              • HTML <br></br>
              • CSS <br></br>
              • JavaScript <br></br>
              • React <br></br>
              • GitHub <br></br>
            </p>
          </div>
          <img src={sitImage} alt="Magdalena Pietras" className="image-block" />
          <div className="text-block">
            <p>I also love and work well in CMS. Let me list some:<br></br>
            • WordPress + WooCommerce <br></br>
            • Wix Studio <br></br>
            • Joomla</p>
          </div>
        </div>
      </section>

        {/* My Projects */}
    <section className="projects-section">
      <h1 className="projects-title">My Web Development Projects</h1>
      <div className="project-cards">
        <ProjectCard
          imageSrc={onedayatatimeImage}
          title="One Day at a Time"
          description="I developed a fully functional website designed to generate a new motivational quote every day. The purpose is to inspire, motivate, and help users stay on track with their goals. It's a simple yet powerful tool for daily encouragement."
          techList={['HTML', 'CSS', 'JavaScript', 'Figma']}
          liveLink="https://magpie24.github.io/One-Day-at-a-Time--/"
          githubLink="https://github.com/magpie24/One-Day-at-a-Time--"
        />
        <ProjectCard
          imageSrc={moveyourbodyImage}
          title="Move Your Body in Koszalin"
          description="A responsive website that guides users through the hidden sports spots in my hometown, Koszalin. The design is energetic and powerful, ensuring an engaging experience across all devices. It's perfect for locals and visitors alike, helping them discover unique places to stay active and explore the city's athletic side."
          techList={['HTML', 'CSS', 'JavaScript', 'Figma']}
          liveLink="https://move-your-body-in-koszalin.magdalenapietras.dk/index.html?fbclid=IwAR0ZZqjF8nqANCfRXO7L0d2Hqtb6q9oQLkQgDdmNxCHfNhXs_egRBRZtxF4"
          githubLink="https://github.com/magpie24/Koszalin"
        />
        <ProjectCard
          imageSrc={boardgames}
          title="Board Games Search"
          description="A React-based solution that helps users search, filter, and discover games available at a café in Aarhus. The user-friendly interface allows visitors to easily browse through the game collection and quickly find something that matches their interests. This dynamic and efficient tool enhances the gaming experience for café-goers by making the search process simple and intuitive."
          techList={['React', 'GitHub']}
          liveLink="https://magpie24.github.io/BoardGames/"
          githubLink="https://github.com/magpie24/BoardGames"
        />

        <ProjectCard
          imageSrc={petparadise}
          title="PetParadise Shop"
          description="WooCommerce shop with products for pets. Group project."
          techList={['WooCommerce', 'WordPress', 'Figma']}
          liveLink="https://petparadise.magdalenapietras.dk/"
        />

        <ProjectCard
          imageSrc={felizpietras}
          title="Portfolio Website"
          description="Yes, this is this website :D But just so you know - I also coded this."
          techList={['React', 'CSS', 'HTML', 'GitHub']}
          liveLink="https://magpie24.github.io/Portfolio/"
          githubLink="https://github.com/magpie24/Portfolio"
        />

<ProjectCard
          imageSrc={quotiaImage}
          title="Quotia App"
          description="A quote-based app that delivers daily inspirational quotes."
          techList={['Figma']}
          liveLink="https://www.behance.net/gallery/162669067/Quotia-App-With-Quotes"
        />

      </div>
    </section>
 
      
      {/* Contact Section */}
      <div id="section4" className="section"></div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Contact</h1>
          <br></br>
          <p>magda.pietras.con@gmail.com</p>
          <br></br>
          <p>Check me out:</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/magdalena-pietra%C5%9B-7a6389237/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://www.tiktok.com/@feliznailz_" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="icon" />
            </a>
            <a href="https://www.instagram.com/feliznailz_?igsh=Zmk2OXQwaXRvZzBo&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
        <div className="contact-right">
          <img src={usmiech} alt="Magdalena Pietras" />
        </div>
      </div>

      {/* Footer */}

    <div className="footer">
      <img src={footer}></img>
    </div>

    <div className="footer2">
      <img src={footermobile}></img>
    </div>

    {/* Sidebar - Side Floating Navigation Bar */}

      <Sidebar />








    </>
  );
}



export default App;
