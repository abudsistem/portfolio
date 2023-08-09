import Skillsbackend from "../components/skills/backend/page";
import Skillsfrontend from "../components/skills/frontend/page";
import Mentors from "../components/skills/mentors/page";

export default function AboutMe() {
    return(
        <header>
            <h2>Skills</h2>
                <h3>Frontend</h3>
            <Skillsfrontend />
                <h3>backend</h3>
            <Skillsbackend />
        </header>
        
    
    )
}