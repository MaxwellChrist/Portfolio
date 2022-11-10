import "./Home.css"
import Resume from '../../assets/resume/resume.pdf'
import AnimateHeading from './Animations/AnimateHeading'

const Home = () => {

    let name = ['M', 'a', 'x', 'w', 'e', 'l', 'l', ' ', 'C', 'h', 'r', 'i', 's', 't']
    let title = ['F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ', 'W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    return (
        <section className="home-container">
            <div className='home-content'>
                <AnimateHeading
                    name={name}
                    title={title}
                />
                <div className="buttons-container">
                    <a href={Resume} download className='btn'>Download Resume</a>
                </div>
            </div>
        </section>
    )
}

export default Home