import React from 'react';
import "./User3.css"
// import style from './custom.module.css';
// import {Table} from "react-bootstrap";

import './App.css';





    //   Nested list with Nested Array
 function App() {
  const students=[
    {name:"anand", email:"anand@g.co", Address:[
      {Hn: "10", city:"Jamui", country:"India" },
      {Hn: "12", city:"jhajha", country:"India" },
      {Hn: "13", city:"khairma", country:"India" },
      {Hn: "11", city:"sono", country:"India" }
    ]},
    {name:"Arun", email:"arrun@g.co", Address:[
      {Hn: "10", city:"Jamui", country:"India" },
      {Hn: "12", city:"jhajha", country:"India" },
      {Hn: "13", city:"khairma", country:"India" },
      {Hn: "11", city:"sono", country:"India" }
    ]},
    {name:"Aryan", email:"aryan@g.co", Address:[
      {Hn: "10", city:"Jamui", country:"India" },
      {Hn: "12", city:"jhajha", country:"India" },
      {Hn: "13", city:"khairma", country:"India" },
      {Hn: "11", city:"sono", country:"India" }
    ]},
    {name:"Choti", email:"choti@g.co", Address:[
      {Hn: "10", city:"Jamui", country:"India" },
      {Hn: "12", city:"jhajha", country:"India" },
      {Hn: "13", city:"khairma", country:"India" },
      {Hn: "11", city:"sono", country:"India" }
    ]},
  ]
  

  return (
    <div className="App">
<h1>list with nested Array</h1>

<table  >
  <tbody >
    <tr  style={{ borderSpacing:"40px", borderCollapse:"separate" }}>     
   <th>Name</th>
   <th>email</th>
   <th>Address</th>
     </tr>
  </tbody>
</table>
{
  students.map((item)=>
  <tr key={item} style={{borderSpacing:"40px" , borderCollapse:"separate" }} >
    <th>{item.name}</th>
    <th>{item.email}</th>
    <th>
      {item.Address.map((data)=>
      <tr>
         <th>{data.Hn}</th>
         <th>{data.city}</th>
         <th>{data.country}</th>
      </tr> )
      }</th>
  </tr>
  )
}


  </div>
  )
}





export default App;





