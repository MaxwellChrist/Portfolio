import './AnimateHeading.css'
import { gsap } from 'gsap'
import {useLayoutEffect, useRef} from 'react'

const AnimateName = ({ name, title }) => {

    const ref = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to('.letter-animation', { y: 0, stagger: 0.4, delay: 0.5, duration: 0.1 })
            gsap.to('.title-animation', { y: 0, stagger: 0.22, delay: 0.5, duration: 0.05 })
          }, ref); 
          return () => ctx.revert();
    
    }, []);

  return (
    <div className="name-animation-container" ref={ref}>
      <div className="name-container">
        {name.map((letter, index) => (
          <span key={index} className={`name-animation letter-animation NA-${index}`}>
            {letter}
          </span>
        ))}
      </div>
      <div className="title-container">
        {title.map((letter, index) => (
          <span key={index} className={`title-animation letter-animation TA-${index}`}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}

export default AnimateName
