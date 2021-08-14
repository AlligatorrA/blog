import React from 'react';
import "./App"
import "./all.css"


import { Link } from "react-router-dom";


function Nav() {

    return (
        <>
            <nav className="navigation container">
                <ul className="non-bullets nav-pills" >

                    <li className="list-items-inline"  >
                        <button> <Link to="/My Components/Home" className="L1" > Home </Link></button>
                    </li>

                    <li className="list-items-inline"  >
                        <button>  <Link to="/My Components/Work" className="L1"> Projects </Link></button>
                    </li>
                    <li className="list-items-inline" >
                        <button>   <Link to="/My Components/Write" className="L1"> Writes </Link></button>
                    </li>

                    <button className="btn">  <Link to="/My Components/contact" className="L2"  > Contact </Link></button>

                </ul>



            </nav>



        </ >
    )

}

export default Nav

