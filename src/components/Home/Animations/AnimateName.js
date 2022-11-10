import './AnimateName.css'
import { gsap } from 'gsap'
import {useLayoutEffect, useRef} from 'react'

const AnimatedName = ({ firstName, lastName }) => {

    const ref = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to('.letter-animation', { y: 0, stagger: 0.1, delay: 0.5, duration: 0.1 })
          }, ref); 
          return () => ctx.revert();
    
    }, []);

  return (
    <div className="name-animation-container" ref={ref}>
      {firstName.map((letter, index) => (
        <span key={index} className={`firstname-animation letter-animation LA-${index}`}>
          {letter}
        </span>
      ))}
      {lastName.map((letter, index) => (
        <span key={index} className={`lastname-animation letter-animation LA-${index}`}>
          {letter}
        </span>
      ))}
    </div>
  )
}

export default AnimatedName
