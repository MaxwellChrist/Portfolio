import './AnimateName.css'
import { gsap } from 'gsap'
import {useLayoutEffect, useRef} from 'react'

const AnimatedName = ({ strArray, index }) => {

    const ref = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to('.letter-animation', { y: 0, stagger: 0.1, delay: 0.5, duration: 0.1 })
          }, ref); 
          return () => ctx.revert();
    
    }, []);

  return (
    <div className="name-animation-container" ref={ref}>
      {strArray.map((letter, index) => (
        <span key={index} className={`letter-animation letter-animation-${index}`}>
          {letter === " " ? letter : letter }
        </span>
      ))}
    </div>
  )
}

export default AnimatedName
