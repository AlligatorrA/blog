import './App.css';
import React,{useState} from 'react'
// import User from "./User.js"




//controlled Component in ReactJs


function App() {

const [val, setVal]=useState("")
const [item, setItem]=useState("ooo")

  return (
    <div>
      <h1>Controlled Component</h1>
      <h1>{val}</h1>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} /> <br />
      <h1>{item} </h1>
      <input type="text"  onChange={(e)=>setItem(e.target.value)} />
    </div>
  )
}

export default App








