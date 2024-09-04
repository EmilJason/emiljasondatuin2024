import lhandcreative from "../assets/images/lhandcreatives.gif";
import protoapp from "../assets/images/protoapp.gif";
import cusinaedelmina from "../assets/images/cusinaedelmina.gif";
import surveyvue from "../assets/images/surveyvue.gif";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project">
          <img
            src={lhandcreative}
            alt="Lhandcreative"
                        
          />
          <div className="project-details">
          <h3>Lhandcreative</h3>
          <p>A website for a design agency.</p>
          <div className="actions">
            <a href="https://lhandcreatives.vercel.app/" target="_blank" rel="noopener noreferrer">
            View
            </a>
            <a href="https://github.com/EmilJason/lhandcreatives" target="_blank" rel="noopener noreferrer">
            Github
            </a>
          </div>
          </div>
          
        </div>
        <div className="project">
          <img src={protoapp} alt="Protoapp"  />
          <div className="project-details">
          <h3>Protoapp</h3>
          <p>A website for a design agency.</p>
          <div className="actions">
            <a href="https://protoapp-exam.vercel.app/" target="_blank" rel="noopener noreferrer">
            View
            </a>
            <a href="https://github.com/EmilJason/protoapp-exam" target="_blank" rel="noopener noreferrer">
            Github
            </a>
          </div>
          </div>
        </div>
        <div className="project">
          <img
            src={cusinaedelmina}
            alt="Cusinaedelmina"
                        
          />
          <div className="project-details">
          <h3>Cusinaedelmina</h3>
          <p>A simple website for an ordering system of a restaurant.</p>
          <div className="actions">
            <a href="https://foodapi-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
            View
            </a>
            <a href="https://github.com/EmilJason/foodorderingv2" target="_blank" rel="noopener noreferrer">
            Github
            </a>
          </div>
          </div>
        </div>
        <div className="project">
          <img src={surveyvue} alt="Survey"  />
          <div className="project-details">
          <h3>Survey</h3>
          <p>An output of my exam for a software development company.</p>
          <div className="actions">
            <a href="https://vue-survey.netlify.app/" target="_blank" rel="noopener noreferrer">
            View
            </a>
            <a href="https://github.com/EmilJason/vue-surveyapp" target="_blank" rel="noopener noreferrer">
            Github
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
