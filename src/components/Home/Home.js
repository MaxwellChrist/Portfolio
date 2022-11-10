import "./Home.css"
import Resume from '../../assets/resume/resume.pdf'
import AnimatedName from './Animations/AnimateName'

const Home = () => {

    let firstName = ['M', 'a', 'x', 'w', 'e', 'l', 'l']
    let lastName = ['C', 'h', 'r', 'i', 's', 't']
    return (
        <section className="home-container">
            <div className='home-content'>
                <AnimatedName
                    firstName={firstName}
                    lastName={lastName}
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