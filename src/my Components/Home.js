import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faGithub,
    faTwitter,
    faLinkedin

} from "@fortawesome/free-brands-svg-icons";



function Home() {
    return (
        <div>
            

            <main className="homMain" >
                
                
                <div className="am">
                    <h2 className="title" > Hi,  I'm Anand.</h2>
                    <h1 className="title2">Web <strong>Developer</strong> </h1>
                    <p className="hompara">  I love web development & designs  sometimes Writing </p>

                  
                </div>
                
                
                <section className="homsec" >
                    <h1 className="homtec" >Technologies</h1>
                    <hr />
                    <p className="hompa">I love to code from scraches and beutify the Website appearance. I am familiar with HTML, CSS, Bootstrap, NodeJS, ReactJS, GitHub and Web Hosting </p>
                </section>

            </main>
            <footer >
                <div >    
                <a className="footlink" href="https://github.com/AlligatorrA">
                    <FontAwesomeIcon icon={faGithub} size="1x" />
                </a>
                <a className="footlink" href="https://twitter.com/Aryakkhauj" >
                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                </a>
                <a className="footlink" href="https://www.linkedin.com/in/anand-raj-b10599171/">
                   <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </a>
                 </div>
            </footer>

            
        </div>
        
    )
}

export default Home
