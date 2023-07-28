//skills frontend
const mentors = [
    "PLATZI","REACTJS","NEXTJS","FULL STACK OPEN","MDN WEB DOCS","MIDUDEV","HOLAMUNDO","UNIXGUY","FREE CODE CAMP"];
//creando un li 
export default function Mentors() {
    return (
      <>
        {mentors.map((mentor, index) => (
          <li key={index}>{mentor}</li>
        ))}
      </>
    );
  }