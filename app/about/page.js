import Skillsbackend from "../components/skills/backend/page";
import Skillsfrontend from "../components/skills/frontend/page";
import Mentors from "../components/skills/mentors/page";

export default function AboutMe() {
    return(
        <header>
            <h2>hi Im abudsystem</h2>
                <p>Do you need to create something or do you want a solution Here you have some information about me so you dont hesitate</p>
                <p>FULL-STACKWEB DEVELOPMENT</p>
            <p>My focus revolves around understanding the needs of clients and endusers and then translating those needs into effective technical solutions I employ a bestpractices approach to web development and stay up-to-date with the latest trends and technologies to ensure my solutions are scalable secure and highperforming</p>
            <h3>Skills</h3>
                <h4>frontend</h4>
                    <Skillsfrontend />
                <h4>backend</h4>
                    <Skillsbackend/>
            <h3>mentors</h3>
                <p>my mentors are the following sites and people</p>
                <Mentors />
        </header>
    )
}