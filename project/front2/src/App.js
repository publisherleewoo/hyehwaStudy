import React from "react"; 
import Nav from "./components/nav/Nav"
import Contents from "./components/contents/Contents"
// import axios from 'axios'

function App(props) {
  //URL get방식의 토큰이 있을때
 
//  axios.get('http://localhost:8001/getToken',{
//    headers:{
//     "Content-Type": "application/json",
//   }}).then((res)=>{
//    console.log(res)
//  }).catch(e=>console.log(e))
  console.log(props)
  return (
    <>
   
     <Nav></Nav>
     <Contents></Contents>
    </>
  );
}


export default App;