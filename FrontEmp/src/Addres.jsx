import React, { useState } from 'react'
import axios from 'axios'

function Addres() {
  let [data,setData]=useState({"_id":"","name":"","phno":"","sal":"","dept":"","gen":""})
  let [msg,setMsg]=useState("")
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let add=()=>{
    axios.post("http://localhost:9090/add",data).then((res)=>{
      if(res.data.err==undefined)
      {
        setMsg(res.data.msg)
        setData({"_id":"","name":"","phno":"","sal":"","dept":"","gen":""})
      }
      else{
        setMsg(res.data.err)
      }
    })

  }
  return (
    <div>
      <div>{msg}</div>
      <input type='text' placeholder='Enter Your Id' name="_id" value={data._id} onChange={fun}/>
      <input type='text' placeholder='Enter Your Name' name="name" value={data.name} onChange={fun}/>
      <input type='text' placeholder='Enter Your Salary' name="sal" value={data.sal} onChange={fun}/>
      <input type='text' placeholder='Enter Your Phone number' name="phno" value={data.phno} onChange={fun}/>
      
      <select value={data.dept} onChange={fun} name="dept">
        <option value="" selected disabled>Select Department</option>
        <option value="CSE">Computer Science</option>
        <option value="EEE">Electrical</option>
        <option value="ECE">Electronics</option>
        <option value="CE">Civil</option>
        <option value="Mech">Mechanical</option>
        <option value="Sales">Sales Department</option>
        <option value="HR">HR Department</option>
      </select>

      <input type='radio' name='gen' value="Male"  onChange={fun} checked={data.gen=='Male'}/>Male
      <input type='radio' name='gen' value="Female"  onChange={fun} checked={data.gen=='Female'}/>Female
      <button onClick={add}>Add Data</button>

    </div>
  )
}

export default Addres