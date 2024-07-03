import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { experiences } from "../data/experiences";

gsap.registerPlugin(useGSAP, ScrollTrigger);

let mouse = {
  x: undefined,
  y: undefined,
};

const Experience = () => {
  const experienceContainer = useRef();
  const card = useRef()

  return (
    <>
      <div
        id="experience"
        ref={experienceContainer}
        style={{
          position: "relative",
          minHeight: "100dvh"
        }}
        onMouseMove={(e) => {
          mouse.x = e.clientX;
          mouse.y = e.clientY;

          // console.log('circ', circ.current)
        }}
      >
       
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
