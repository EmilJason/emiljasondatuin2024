
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"


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
        height: '100dvh',
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
          <div className="previous-work">
            <h3>GCM3 inc.,</h3>
            <span>Software Developer</span>
          </div>
          <div className="previous-work">
            <h3>Nityo Infotech / IBM</h3>
            <span>IT Helpdesk</span>
          </div>
          <div className="previous-work">
            <h3>Calasiao Educational Center</h3>
            <span>IT support / Computer Teacher</span>
          </div>
          <div className="previous-work">
            <h3>DABZ Printshoppe</h3>
            <span>Graphic Artist</span>
          </div>
        </div>
        </div>
    </>
  )
}

export default Experience
