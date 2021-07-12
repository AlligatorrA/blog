import React from 'react';


function Work() {
    return (
        <>
        <div className="works">
            <div className="heading"><h1>Check out my <span>Projects</span></h1></div>
            <section className="worsec" >
                <p> I am proud to be part of <a className="codlink" href="https://neog.camp/">neoGcamp</a> and also compleated all the projects of level 0.  Here are my projects  </p>
            </section>
            <section className="worsec1" >   
            <h1>Talk British</h1>
            <hr />
            <p className="worpa">Are you fan of British accent? Try this App and learn how to speak British.It's for fun. built-in vanilla js.</p>
            <a className="codlink" href="https://github.com/AlligatorrA/Talk-British.git"> Code</a> 
            <a className="codlink" href="https://talkbritishbyanand.netlify.app/"> ▶️ Live Project</a>
            </section>
              <hr />
              <hr />
              <section className="worsec2">  
                  <h1>Emoji Dictionary</h1>
                  <hr />
            <p className="worpa"> Try this Emoji Dictionary. It returns the Meaning of Emoji. Only for Entertainment purpose. built-in React js. </p>
            <a className="codlink" href="https://codesandbox.io/s/emoji-dictonary-czbz2">Code</a>
            <a className="codlink" href="https://czbz2.csb.app/"> ▶️Live Project</a>
            </section>
            <hr />
            <hr />
        </div>
        </>
    )
}

export default Work
