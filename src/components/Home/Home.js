import "./Home.css"
import Resume from '../../assets/resume/resume.pdf'
import {gsap} from 'gsap'
import {useLayoutEffect, useRef} from 'react'

const Home = () => {
    const comp = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(['.home-content'], {opacity: 0, duration: 3, y: 200, stagger: 0.6})
            gsap.from(['h1'], {opacity: 0, duration: 1, y: 250})
            gsap.from(['h3'], {opacity: 0, duration: 1, y: -250, delay: 1})
            gsap.from(['.buttons-container'], {opacity: 0, duration: 1, y: 200, delay: 2})

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