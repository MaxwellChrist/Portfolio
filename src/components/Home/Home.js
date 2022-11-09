import "./Home.css"
import Resume from '../../assets/resume/resume.pdf'
import { gsap } from 'gsap'
import {useLayoutEffect, useRef} from 'react'

const Home = () => {
    const comp = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(['.home-content'], {opacity: 1, scaleY: 1, stagger: 5})
            // gsap.from(['h1', 'h3', '.buttons-container' ], {opacity: 0, scaleY: 0, duration: 1, y: -50 })
            gsap.from(['h1'], {opacity: 0, scaleY: 0, duration: 1, delay: 1 })
            gsap.from(['h3'], {opacity: 0, scaleY: 0, duration: 1, delay: 2 })
            gsap.from(['.buttons-container'], {opacity: 0, scaleY: 0, duration: 1, delay: 3 })
            
            // gsap.to(['.home-content'], {opacity: 1, scaleY: 1, duration: 1 } );
            gsap.to(['h1', 'h3', '.buttons-container' ], {opacity: 1, scaleY: 1, duration: 1 })

          }, comp); 
          return () => ctx.revert();
    
    }, []);
    return (
        <section className="home-container" ref={comp}>
            <div className='home-content'>
                <h1>Maxwell Christ</h1>
                <h3>Full Stack Web Developer</h3>
                <div className="buttons-container">
                    <a href={Resume} download className='btn'>Download Resume</a>
                </div>
            </div>
        </section>
    )
}

export default Home