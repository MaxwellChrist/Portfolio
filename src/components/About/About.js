import "./About.css";
import ProfileImg from "../../assets/images/Me2.jpg";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <div className="about-content-image">
            <img
              src={ProfileImg}
              alt="Maxwell Christ smiling and wearing a suit"
            />
          </div>
          <div className="about-content-text">
            <h1>About Me</h1>
            <p>
              My name is Max Christ and I'm a front end developer with a
              background in marketing and finance. I've always been a dedicated
              individual who loves learning new technologies and solving
              problems. Around two years ago, I found my calling to become a
              developer and I've spent the past year and a half developing my
              skills through self-teaching, completing a coding bootcamp through
              BloomTech, and completing a summer apprenticeship with Human
              Rights First. I will continute to add projects and expand my
              knowledge while enjoying the process of learning and growing as a
              front end developer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
