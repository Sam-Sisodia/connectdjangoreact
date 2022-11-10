import logo from './logo.svg';
import './App.css';
import {useState, useEffect}  from "react";


import  axios from "axios";
function App() {


 const[students,setStudents]=useState([])


 useEffect(()=>{
   async function getAllStudent()
   {
     try{

       const students = await axios.get("http://127.0.0.1:8000/student/")
       console.log(students.data)
       setStudents(students.data)

     }
     catch(error){

     }
   }
   getAllStudent()

 },[])
























  return (




    <div className="App">
      <h1>Student data With Django  API </h1>
      {
        students.map((student, i )=> {
           return(
            <h2>{student.name}   {student.address} {student.contact}</h2>
           )
        })
      }
    
      
    </div>
  );
}

export default App;
