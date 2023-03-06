import "./Projects.css";
import Img1 from "../../assets/images/Grid.PNG";
import Img2 from "../../assets/images/JWT.PNG";
import Img3 from "../../assets/images/LambdaNews.PNG";
import Img4 from "../../assets/images/Wheel&Quiz.PNG";
import Img5 from "../../assets/images/RPS.PNG";
import Img6 from "../../assets/images/IP.PNG";

const data = [
  {
    id: 1,
    image: Img1,
    title: "LeadTech Games",
    github: "https://github.com/MaxwellChrist/React-Grid",
    projectLink: "",
  },
  {
    id: 2,
    image: Img2,
    title: "SecureTech Solutions",
    github:
      "https://github.com/MaxwellChrist/Authentication-and-authorization-using-JSON-Web-Tokens-JWT",
    projectLink: "",
  },
  {
    id: 3,
    image: Img3,
    title: "Lambda News",
    github: "https://github.com/MaxwellChrist/Lambda-News",
    projectLink: "",
  },
  {
    id: 4,
    image: Img4,
    title: "React Wheel and Quiz",
    github: "https://github.com/MaxwellChrist/React-Wheel-and-Quiz",
    projectLink: "",
  },
  {
    id: 5,
    image: Img5,
    title: "Rock Paper Scissors",
    github: "https://github.com/MaxwellChrist/RockPaperScissors",
    projectLink: "https://rock-paper-scissors-zozu.vercel.app/",
  },
  {
    id: 6,
    image: Img6,
    title: "IP Address Finder",
    github: "https://github.com/MaxwellChrist/IP",
    projectLink: "https://ip-rosy.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h5>Projects</h5>
      <div className="projects-container">
        {data.map(({ id, image, title, github, projectLink }) => {
          return (
            <article key={id} className="projects-item">
              <div className="projects-item-image">
                <img src={image} alt={title} />
              </div>
              <div className="projects-item-content">
                <h3>{title}</h3>
                <div className="projects-item-links">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  {projectLink && (
                    <a
                      href={projectLink}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Project Link
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
