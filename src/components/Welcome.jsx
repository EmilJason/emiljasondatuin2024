import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"

gsap.registerPlugin(useGSAP)

const RECTANGLES = [
    {id: 1, text: ''},
    {id: 2, text: ''},
    {id: 3, text: ''},
    {id: 4, text: ''},
    {id: 5, text: ''},
    // {id: 6, text: ''},
    // {id: 7, text: ''},
    // {id: 8, text: ''},
    // {id: 9, text: ''},
    // {id: 10, text: ''},
]

const Welcome = () => {
    const container = useRef()
    const box = useRef()
    const [rectangles, setRectangles] = useState(RECTANGLES)
    
    useGSAP(
        (context, contextSafe)=>{
            gsap.to('.box',{
                duration: 2,
                x: 100,
                y: 100,
                rotation: 360,
                ease: "power2.inOut",
                // repeat: -1,
                yoyo: true
            })

            //eventListeners
            const clickBox = contextSafe(() => {
                gsap.to(box.current, {
                    scale: 2,
                    ease: "power2.inOut",
                    yoyo: true
                })
            })
            box.current.addEventListener('click', clickBox)

            // rectangles
            gsap.to('.rect',{
                y: '+= 1000',
                ease: 'power1.inOut',
                duration: Math.random() * 2,
                stagger: 2,
                repeat: '-1',
                yoyo: true
            })

            //cleanup
            return () => {
                gsap.killTweensOf(container.current)
                box.current.removeEventListener('click', clickBox)
            }
        },
        {scope: container}        
    )

    //rectangles
    const createRectangles = () => {
        return rectangles.map((item, index)=>{
            return <div className="rect" key={item.id} style={{
                        width: "200px",
                        height: "400px",
                        backgroundColor: "#3C5B6F",
                        position: "absolute",
                        left: `${(index + 1) * 100}px`,
                        // left: `${Math.random() * 1000}px`,
                        top: `${Math.random() * 600}px`,
                        mixBlendMode: 'multiply',
                        // opacity: '0.5'
                    }}>{item.text}</div>
        })
    }
  return (
    <div style={{position: 'relative', height: '100dvh', overflow: 'hidden'}} ref={container}>

<h5 style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)'
      }}>Hello World!</h5>

      <div ref={box} className="box" style={{
        width: "100px",
        height: "100px",
        backgroundColor: "red",
        position: 'absolute',

      }}>box</div>
      {createRectangles()}
      
    </div>
  )
}

export default Welcome
