import './skills.css';

import htmlIcon from "../assets/icons/Screenshot 2025-03-11 004451.png";
import cssIcon from "../assets/icons/Screenshot 2025-03-11 004843.png";
 import jsIcon from "../assets/icons/Js.png";
 import reactIcon from "../assets/icons/React.png";
 import nodeIcon from "../assets/icons/node.png";
 import mongoIcon from "../assets/icons/mongodb.png";
 import expressIcon from "../assets/icons/express.png";
 import cIcon from "../assets/icons/c.png";
 import javaIcon from "../assets/icons/java.png";
 import pythonIcon from "../assets/icons/cpp.png";

export const Skills = () => {
  const skills = [
    { name: "HTML", icon: htmlIcon },
     { name: "CSS", icon: cssIcon },
     { name: "JavaScript", icon: jsIcon },
     { name: "React", icon: reactIcon },
     { name: "Node.js", icon: nodeIcon },
     { name: "MongoDB", icon: mongoIcon },
     { name: "Express.js", icon: expressIcon },
     { name: "C", icon: cIcon },
     { name: "Java", icon: javaIcon },
     { name: "C++", icon: pythonIcon },
  ];

  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};