import Skillsbackend from "../components/skills/backend/page";
import Skillsfrontend from "../components/skills/frontend/page";
import Mentors from "../components/skills/mentors/page";

export default function AboutMe() {
    return(
        <>
            <h2>
                hi, I'm abudsystem
            </h2>
            
            <p> 
                Do you need to create something? or do you want a solution?
                <br></br>
                here you have some information about me so you don't hesitate  
            </p>

            <p >
               FULL-STACK  -  WEB DEVELOPMENT
            </p>

            <p>
                My focus revolves around understanding the needs of clients and end-users, and then translating those needs into effective technical solutions. I employ a best-practices approach to web development and stay up-to-date with the latest trends and technologies to ensure my solutions are scalable, secure, and high-performing.</p>
            <div>
                <h3>Skills</h3>
                
                <div>
                    <div>
                        <h4>frontend</h4>
                        <ul>
                            <Skillsfrontend />
                        </ul>
                    </div>
                
                    <div>
                        <h4>backend</h4>
                        <ul>
                            <Skillsbackend />
                        </ul>
                    </div>
                </div>
            </div>

            <h3> my mentors are the following sites and people </h3>
            <div>
                <ul>
                   <Mentors />
                </ul>
            </div>
        </>
    )
}
