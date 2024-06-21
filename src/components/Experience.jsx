
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

import { experiences } from "../data/experiences"


gsap.registerPlugin(useGSAP,ScrollTrigger)

const Experience = () => {
    const experienceContainer = useRef()

    useGSAP(()=>{
      
      ScrollTrigger.batch('.previous-work',{
        onEnter: el =>{
          gsap.fromTo(el,{
            opacity: 0,
            y: 100
          },
          {
            opacity: 1,
            y: 0,
            stagger: '.5',
          }
        )
        },
        scrub: true,
      })

      // let tl = gsap.timeline({
      //   scrollTrigger:{
      //     trigger: experienceContainer.current,
      //     markers: true,
      //     start: 'top 10%',
      //     end: 'bottom bottom',
      //     scrub: 1,
      //     pin: true,
      //   }
      // })
      // tl.from('.previous-work',{
      //   opacity: 0,
      //   y: 100,
      // })
      // .to('.previous-work',{
      //   opacity: 1,
      //   y: 0,
      //   duration: '5s',
      // })
    
    },{scope: experienceContainer})

  return (
    <>
    <div id="experience" ref={experienceContainer} style={{
        position: 'relative',
        minHeight: '100dvh',
        backgroundColor: 'var(--bg-color-1)',
        overflowX: 'hidden',
    }}>
        <div className="label-slider-top">
          <span className="exp-label-top">Experience</span>
          <span className="exp-label-top">Experience</span>
        </div>
        <div className="label-slider-bottom">
          <span className="exp-label">Experience </span>
          <span className="exp-label">Experience</span>
        </div>
        {/* content */}
        <div className="work">
        {experiences.map((item, index) => (
            <div className="previous-work" key={index}>
              <div className="company-date">
                <h3>{item.company}</h3>
                <span>{item.dateHired.month} {item.dateHired.year} - {item.dateLeave.month} {item.dateLeave.year}</span>
              </div>
              <div className="company-description">
                <p>{item.description}</p>
                <div className="tech-list">
                {item.technology.map(tech=>(<span className="tech" key={tech}>{tech}</span>))}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    </>
  )
}

export default Experience
