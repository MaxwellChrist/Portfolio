import "./Projects.css"
import Img1 from '../../assets/images/Grid.PNG'
import Img2 from '../../assets/images/JWT.PNG'
import Img3 from '../../assets/images/LambdaNews.PNG'
import Img4 from '../../assets/images/Wheel&Quiz.PNG'
import Img5 from '../../assets/images/RPS.PNG'
import Img6 from '../../assets/images/IP.PNG'

const data = [
  {
    id: 1,
    image: Img1,
    title: "React Grid",
    github: 'https://github.com/MaxwellChrist/React-Grid'
  },
  {
    id: 2,
    image: Img2,
    title: "Authentication and authorization using JSON Web tokens (JWT)",
    github: 'https://github.com/MaxwellChrist/Authentication-and-authorization-using-JSON-Web-Tokens-JWT'
  },
  {
    id: 3,
    image: Img3,
    title: "Lambda News",
    github: 'https://github.com/MaxwellChrist/Lambda-News'
  },
  {
    id: 4,
    image: Img4,
    title: "React Wheel and Quiz",
    github: 'https://github.com/MaxwellChrist/React-Wheel-and-Quiz'
  },
  {
    id: 5,
    image: Img5,
    title: "Rock Paper Scissors",
    github: 'https://github.com/MaxwellChrist/RockPaperScissors'
  },
  {
    id: 6,
    image: Img6,
    title: "IP Address Finder",
    github: 'https://github.com/MaxwellChrist/IP'
  }
]

const Projects = () => {
  return (
    <section className="projects">
      <h5>Projects</h5>
      <div className='projects-container'>
        {
          data.map(({id, image, title, github}) => {
            return(
              <article key={id} className='projects-item'>
                <div className='projects-item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='projects-item-links'>
                  <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects