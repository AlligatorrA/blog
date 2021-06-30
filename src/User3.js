import React,{useEffect} from 'react';

  import './App.css';





// useEffect  with Sepecific state and Props   in React js 


function User3(props) {

  


  useEffect(()=>{    
  alert("count is" +props.count) ;
 },[props.count])
  return (
    <div className="App" style={{textAlign:"center"}}>
     <h1>Count props:{props.count}</h1>
     <h1> Data props:{props.data}</h1>
      
    </div>
  )
}





export default User3;







