import "./Home.css"
import Resume from '../../assets/resume/resume.pdf'

const Home = () => {
    return (
        <>
            <div className="home-container">
                <h1>Maxwell Christ</h1>
                <h3>Full Stack Web Developer</h3>
                <div class="buttons-container">
                  <a href={Resume} download className='btn'>Download Resume</a>
                </div>
            </div>
        </>
    )
}

export default Home