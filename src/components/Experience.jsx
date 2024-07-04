import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  useRef, useState } from "react";

import { experiences } from "../data/experiences";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const Experience = () => {
  const experienceContainer = useRef();
  const card = useRef()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };



  return (
    <>
      <div
        id="experience"
        ref={experienceContainer}
        style={{
          position: "relative",
          minHeight: "100dvh"
        }}
        onMouseMove={handleMouseMove}
      >
        <div
        className="gradient-overlay"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 107, 107, 0.5), rgba(255, 107, 107, 0) 30%)`
        }}
      ></div>
       
        {/* content */}
        <div className="work">
          {experiences.map((item, index) => (
            <div className="previous-work"  key={index} ref={card}>
             
              <div className="company-date">
                <h3>{item.company}</h3>
                <span>
                  {item.dateHired.month} {item.dateHired.year} -{" "}
                  {item.dateLeave.month} {item.dateLeave.year}  
                </span>
              </div>
              <div className="company-description">
                <p>{item.description}</p>
                <div className="tech-list">
                  {item.technology.map((tech) => (
                    <span className="tech" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
