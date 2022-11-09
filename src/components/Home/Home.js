import "./Home.css"
import Resume from '../../assets/resume/resume.pdf'
import {gsap} from 'gsap'
import {useLayoutEffect, useRef} from 'react'

    // const t1 = gsap.timeline()
    // gsap.from(['.home-content'], {opacity: 0, duration: 1, y: -50})

const Home = () => {

    const comp = useRef(); // create a ref for the root level element (we'll use it later)

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
    
            // all our animations can use selector text like ".box" 
            // and it's properly scoped to our component
            gsap.from(['h1', 'h3'], {opacity: 0, duration: 3, y: -200})
            gsap.from(['a'], {opacity: 0, duration: 3, y: 200})
            
          }, comp); // <- IMPORTANT! Scopes selector text
          
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