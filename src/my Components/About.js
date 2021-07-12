import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faGithub,
    faTwitter,
    faLinkedin

} from "@fortawesome/free-brands-svg-icons";

function About() {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorum assumenda accusantium nulla quo quis cumque! Sunt, quia accusamus! Autem dolore libero, perferendis iusto corrupti incidunt deleniti sequi dicta tempore consequatur voluptas porro aliquid est, qui repellendus dolor quisquam voluptate totam quaerat magnam veritatis. Similique?</p>




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

export default About
