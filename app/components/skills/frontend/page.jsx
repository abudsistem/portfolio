//skills frontend
const skills = ["HTML", "CSS", "TAILWINDCSS", "JAVASCRIPT","REACT.JS",];
//creando un li 
export default function Skillsfrontend() {
    return (
      <>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </>
    );
  }