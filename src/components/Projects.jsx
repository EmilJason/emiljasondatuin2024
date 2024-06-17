import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Projects = () => {
   const works = useRef()
  useGSAP(()=>{
    // const workTl = gsap.timeline({scrollTrigger:{
    //   trigger: works.current,
    //   pin: true,
    //   scrub: true,
    //   start : 'center center'
    // }})
    // workTl.to('.project-slider span',{
    //   x: '+=900',
    //   opacity: 1
    // })

    gsap.fromTo('.project-slider span',{
      opacity: 0.3
    },
    {
      opacity: 1,
      x: '-=900',
      scrollTrigger:{
        trigger: works.current,
        pin: true,
        scrub: true,
        start: 'center center'
      }
    })
    //
    gsap.fromTo('.project-slider2 span',{
      opacity: 0.3
    },
    {
      opacity: 1,
      x: '+=900',
      scrollTrigger:{
        trigger: works.current,
        pin: true,
        scrub: true,
        start: 'center center'
      }
    })
  }, {scope: works.current})
  return (
    <>
    <div ref={works} className="projects">
        <div className="project-slider">
            <span>slide 1</span>
            <span>slide 1</span>
            <span>slide 1</span>
            <span>slide 1</span>
            <span>slide 1</span>
            <span>slide 1</span>
            <span>slide 1</span>
            <span>slide 1</span>
        </div>
        <div className="project-slider2">
        <span>slide 1</span>
            <span>slide 2</span>
            <span>slide 2</span>
            <span>slide 2</span>
            <span>slide 2</span>
            <span>slide 2</span>
            <span>slide 2</span>
            <span>slide 2</span>
        </div>
    </div>
    </>
  )
}

export default Projects
