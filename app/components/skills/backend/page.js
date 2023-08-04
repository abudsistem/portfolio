//skills frontend
const skills = ["PYTHON","NODE.JS","GIT","DOCKER","REACTNATIVE","NEXT.JS","EXPRESS.JS","POSTGRES","LINUX","GRAPHQL","MYSQL","RUST"];
//creando un li 
export default function Skillsbackend() {
    return (
      <>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </>
    );
  }