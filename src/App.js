import './App.css';
import React from 'react'
import {BrowserRouter as Router, Link, Route } from "react-router-dom"
// import User from "./User.js"




//   Routing Setup


function App() {





  return (
    <div>
      <Router>  
        <Link to="/home" >Home</Link>
        <br />
        <Link to="/about" >About</Link>
        <Route path="/home" >   < Home />    </Route>
        <Route path="/about" > < About /> </Route>
      
     

      </Router>
    </div>
  )
}
function Home() {
  return(
    <div>
      <h1>Home </h1>
      <p>This is home Page</p>
    </div>
  )
  
}
function About() {
  return(
    <div>
      <h1>About</h1>
      <p>This is About page</p>
    </div>
  )
  
}

export default App








