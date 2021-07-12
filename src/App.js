import './App.css';
import "./all.css"
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Nav from './Nav';
import Home from './my Components/Home';
import About from "./my Components/About";
import Contact from "./my Components/Contact";
import Work from "./my Components/Work";
import Write from "./my Components/Write";








function App() {

  return (
    <>
      <nav className="App" >
        <div  >

          < Nav />

          <Switch>
            <Route path="/My Components/home" exact={true} > <Home /> </Route>
            <Route path="/My Components/About" > <About /> </Route>
            <Route path="/My Components/Work" > < Work /> </Route>
            <Route path="/My Components/Contact" > <Contact /> </Route>
            <Route path="/My Components/Write">  <Write /> </Route>
            <Route path="*"> <PageNotFound />   </Route>
          </Switch>


        </div>
      </nav>
        <main>
        <div class="img">
        
              </div>
        </main>
      
      <footer className="Appfoot">
   


</footer>
      
     
    </ >
  )
}
function PageNotFound() {
  return (
    <div style={{ textAlign: "center" }} >
      <h1>  <i> Working on it mate</i>  </h1>
    </div>
  )

}




export default App;








