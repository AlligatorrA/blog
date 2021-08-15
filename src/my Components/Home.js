import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faGithub,
    faTwitter,
    faLinkedin

} from "@fortawesome/free-brands-svg-icons";



function Home() {
    return (
        <div className="home">


            <main className="homMain" >


                <div className="am">
                    <h2 className="title" > Hi,  I'm Anand.</h2>
                    <p className="title2">Web Developer</p>
                    <p className="hompara">  I love web development & designing. sometimes Writing !! </p>


                </div>


                <section className="homsec" >
                    <p className="homtec" >Technologies</p>
                    <hr />
                    <p className="hompa"> I love to code and beautify the Website appearance. I am familiar with HTML5, CSS3, Bootstrap, NodeJS, ReactJS, JavaScript, GitHub and Web Hosting. </p>
                </section>
                <section className="homsec" >
                    <p className="homtec" >Projects</p>
                    <hr />
                    <p className="hompa"> Lets pay a visit to my project section see what i have for you. </p>
                    <button>  <Link to="/My Components/Work" className="L1"> Projects </Link></button>
                </section>
                <section className="homsec" >
                    <p className="homtec" >Blogs</p>
                    <hr />
                    <p className="hompa"> I am also interested in writing. sometimes i love poetry as well as blogging. </p>
                    <button  className="homeBtn">  <Link to="/My Components/Write" className="L1"> Writes </Link></button>
                </section>

            </main>
            <footer >
                <div >
                    <a className="footlink" rel="noreferrer" target="_blank"  href="https://github.com/AlligatorrA">
                        <FontAwesomeIcon icon={faGithub} size="1x" />
                    </a>
                    <a className="footlink" rel="noreferrer" target="_blank"  href="https://twitter.com/Aryakkhauj" >
                        <FontAwesomeIcon icon={faTwitter} size="1x" />
                    </a>
                    <a className="footlink"  rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/anand-raj-b10599171/">
                        <FontAwesomeIcon icon={faLinkedin} size="1x" />
                    </a>
                </div>
            </footer>


        </div>

    )
}

export default Home
