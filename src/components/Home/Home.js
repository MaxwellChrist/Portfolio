import "./Home.css"
import Resume from '../../assets/resume/resume.pdf'
import AnimatedName from './Animations/AnimateName'

const Home = () => {
    return (
        <section className="home-container">
            <div className='home-content'>
                <AnimatedName
                    strArray={['M', 'a', 'x', 'w', 'e', 'l', 'l', '  ', 'C', 'h', 'r', 'i', 's', 't']}
                />
                <h3>Full Stack Web Developer</h3>
                <div className="buttons-container">
                    <a href={Resume} download className='btn'>Download Resume</a>
                </div>
            </div>
        </section>
    )
}

export default Home