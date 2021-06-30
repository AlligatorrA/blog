import React from 'react';
import "./User3.css"
// import style from './custom.module.css';
// import {Table} from "react-bootstrap";

import './App.css';






//    Handle Array with List
function App() {
  // const students= ["Arun", "Anand", "Aryan", "choti"];
  //Map looping
  const members = [
    { name: "anand", email: "anand@g.co", roll: 2 },
    { name: "Arun", email: "arrun@g.co", roll: 4 },
    { name: "Aryan", email: "aryan@g.co", roll: 5 },
    { name: "Choti", email: "choti@g.co", roll: 6 },
  ]

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>List with Bootstrap Table</h1>
<table >
  <tbody>     
  <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">Roll.no</th>
  </tr>
  {
    members.map((item,i)=>
    <tr key={i} >
      <th scope="row"></th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.roll}</td>
    </tr>
    
    )
  }
  </tbody>
</table>
  </div>
  )
}





export default App;





