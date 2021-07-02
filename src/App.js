import './App.css';
import React,{useEffect, useState} from 'react'
// import User from './User';
// import { BrowserRouter as Router, Link, Route  } from "react-router-dom"






// Call get method API: Application programming Interphase




function App() {
 const [data , setData]=useState([]) 

  useEffect(() => {

    fetch("").then((result)=>{
      result.json().then((resp)=>{
        // console.log("result", resp)
        setData(resp)
      })
    })
    },[])
  
      
    console.log(data)
  return (
    <div className="App" >

       <h1>Call get method API</h1>
      
     <table border="1px" >
       <tbody>
         <tr>
           <td>ID</td>
           <td>Name</td>
           <td>Email</td>
           <td>Mobile</td>
         </tr>
         {
           data.map((item)=>
           <tr>
           <th>{item.userId}</th>
           <th>{item.name}</th>
           <th>{item.email}</th>
           <th>{item.mobile}</th>
         </tr>
           )
         }
       </tbody>
     </table>



    </div>
  )
}




export default App








