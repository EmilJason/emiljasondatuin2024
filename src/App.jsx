import { useEffect, useState } from 'react';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';

const App = () => {
  const [activeLink,setActiveLink] = useState('home');

  useEffect(()=>{
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const middleOfViewport = scrollY + viewportHeight / 2;
 
      const homeSection = document.getElementById('home');
      const experienceSection = document.getElementById('experience');
      const techstackSection = document.getElementById('tech-stack');
      const contactSection = document.getElementById('contact');

        // check if section is in the middle of the viewport
        const isInMiddleOfViewport = (section) => {
          if (!section) return false;
          const { offsetTop, offsetHeight } = section;
          return middleOfViewport >= offsetTop && middleOfViewport <= offsetTop + offsetHeight;
        };

      if (isInMiddleOfViewport(homeSection)) {
        setActiveLink('home');
      } else if (isInMiddleOfViewport(experienceSection)) {
        setActiveLink('experience');
      } else if (isInMiddleOfViewport(techstackSection)) {
        setActiveLink('tech-stack');
      } else if (isInMiddleOfViewport(contactSection)) {
        setActiveLink('contact');
      }

    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })
  return (
    <div>
      <div className="menu-pointer">
        <ul>
          <li className={activeLink === 'home' ? 'active' : ''}><a href='#home'></a></li>
          <li className={activeLink === 'experience' ? 'active' : ''}><a href='#experience'></a></li>
          <li className={activeLink === 'tech-stack' ? 'active' : ''}><a href='#tech-stack'></a></li>
          <li className={activeLink === 'contact' ? 'active' : ''}><a href='#contact'></a></li>
        </ul>
      </div>
      <Hero />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
