import react,{ useEffect, useState } from 'react'
import './App.css'


import axios from 'axios';

function App() {
 const [name,setName]=useState("");
 const [data,setData]=useState([]);
 const [count,setCount]=useState(0)
const handleChange=(e)=>{setName(e.target.value)}
  const addTask=async()=>{ 
   
    const res=await axios.post("http://127.0.0.1:3003/api/add",{ headers:{"Content-Type":"application/json"},name:name});
    console.log(res);
    if(res.status==201){
      alert(res.data.msg);
      setName("")
      setCount(count+1)
    }
  }

  const getData=async()=>{
    // get todo
    const res=await axios.get("http://127.0.0.1:3003/api/get");
    setData([...res.data])
  }
  useEffect(()=>{
    getData()
  },[count])

    return (
    <>
      
        <div className="fir">
          <input type="text" className="form-control" onChange={handleChange} value={name} placeholder="Add Task" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary" onClick={addTask} type="button" id="button-addon2">Add</button>
        </div>
     
      <div className="container">
        <table className="sc">
       
        
        </table>
      </div>
    </>
  )
}

export default App;