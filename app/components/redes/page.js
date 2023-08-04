//skills frontend
const redes = [
    "instgram","facebook","linkedln","github"
];
//creando un li 
export default function Redes() {
    return (
      <>
        {redes.map((red, index) => (
          <li key={index}>{red}</li>
        ))}
      </>
    );
  }