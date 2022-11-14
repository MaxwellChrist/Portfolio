import './About.css'
import gsap from 'gsap'
import {useLayoutEffect, useRef, useEffect} from 'react'

const About = () => {
    const ref = useRef();

    // function makeLight(i) {
    //     let span = document.createElement("span")
    //     if (i < blurCount) {
    //         span.classList.add("blur")
    //     }
    //     stage.appendChild(span)
    // }

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const count = 50
            const blurCount = 10
            const stage = document.querySelector(".stage")

            function makeLight(i) {
                let span = document.createElement("span")
                if (i < blurCount) {
                    span.classList.add("blur")
                }
                stage.appendChild(span)
                gsap.set(span, {left: gsap.utils.random(0, stage.offsetWidth), 
                                top: gsap.utils.random(0, stage.offsetHeight),
                                scale: gsap.utils.random(0.8, 1.2, 0.1),
                                opactiy: 0
                })
                let tl = gsap.timeline({
                    paused: true,
                    onComplete: () => {
                        span.remove()
                        makeLight(i)
                    }
                })
                if (i < blurCount) {
                    tl.to(span, {
                        opacity: gsap.utils.random(0.1, 0.2),
                        duration: 0.3
                    })
                    tl.to(span, {
                        x: gsap.utils.random(-100, 100),
                        y: gsap.utils.random(-100, 100),
                        duration: gsap.utils.random(5, 7, 0.2),
                        ease: 'none'
                    }, -3)
                    tl.to(span, {
                        opactiy: 0,
                        duration: 0.3
                    }, ">-.3")
                } else {
                    tl.to(span, {
                        opacity: gsap.utils.random(0.5, 0.8),
                        duration: 0.3
                    })
                    tl.to(span, {
                        x: gsap.utils.random(-40, 40),
                        y: gsap.utils.random(-40, 40),
                        duration: gsap.utils.random(5, 7, 0.2),
                        ease: 'none'
                    }, -3)
                    tl.to(span, {
                        opactiy: 0,
                        duration: 0.3
                    }, ">-.3")
                }
                
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