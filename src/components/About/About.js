import './About.css'
import gsap from 'gsap'
import {useLayoutEffect, useRef} from 'react'

const About = () => {
    const ref = useRef();
    let midWidth = window.screen.width / 2
    let midHeight = window.screen.height / 2
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const count = 20
            const blurCount = 20
            const stage = document.querySelector(".stage")

            function makeLight(i) {
                let span = document.createElement("span")
                if (i < blurCount) {
                    span.classList.add("blur")
                }
                stage.appendChild(span)
                gsap.from(span, {xPercent: 50, yPercent: 50, duration: 5})
                gsap.set(span, {left: gsap.utils.random(0, stage.offsetWidth), 
                                top: gsap.utils.random(0, stage.offsetHeight),
                                scale: gsap.utils.random(0, 0.01, 0.01),
                })
                let tl = gsap.timeline({
                    paused: true,
                    onComplete: () => {
                        span.remove()
                        makeLight(i)
                    }
                })
                tl.from(span, {
                    x: gsap.utils.random(-10, 10),
                    y: gsap.utils.random(-10, 10),
                })
                tl.to(span, {
                    x: gsap.utils.random(-100, 100),
                    y: gsap.utils.random(-100, 100),
                    autoAlpha: gsap.utils.random(0.6, 1),
                    duration: gsap.utils.random(5, 20, 1),
                    ease: 'none'
                }, 1)    
                tl.play()
            }


            for (let i = 0; i < count; i++) {
                setTimeout(() => {
                    makeLight(i)
                }, 50 * i)
            }
          }, ref); 
          return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="about-container" ref={ref}>
                <div className='container'>
                    <div className="stage">
                        <h1>This is my about page!</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About