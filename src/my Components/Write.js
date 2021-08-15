import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faGithub,
    faTwitter,
    faLinkedin

} from "@fortawesome/free-brands-svg-icons";
// import { Link, Route } from "react-router-dom";

function Write() {
    return (

        <div className="writeSection">
            <main className="mainwrite" >
                <section className="bloglink">
                    <a className="poe" rel="noreferrer" target="_blank"  href="https://alligatorrswords.blogspot.com/"> Blogs</a>
                </section>
                <section className="bloglink2">
                    <a className="poe" rel="noreferrer" target="_blank"  href="https://www.instagram.com/alligatorr.swords/"> Poetry</a>
                </section>
            </main>
            <footer >
                <div >
                    <a className="footlink" rel="noreferrer" target="_blank"  href="https://github.com/AlligatorrA">
                        <FontAwesomeIcon icon={faGithub} size="0.5x" />
                    </a>
                    <a className="footlink" rel="noreferrer" target="_blank"  href="https://twitter.com/Aryakkhauj" >
                        <FontAwesomeIcon icon={faTwitter} size="0.5x" />
                    </a>
                    <a className="footlink" rel="noreferrer" target="_blank"  href="https://www.linkedin.com/in/anand-raj-b10599171/">
                        <FontAwesomeIcon icon={faLinkedin} size="0.5x" />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Write;
