import "./Home.css"
import Resume from '../../assets/resume/resume.pdf'

const Home = () => {
    return (
        <>
            <section className="home-container">
                <div className="home-content">
                    <h1>Maxwell Christ</h1>
                    <h3>Full Stack Web Developer</h3>
                    <div className="buttons-container">
                      <a href={Resume} download className='btn'>Download Resume</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home