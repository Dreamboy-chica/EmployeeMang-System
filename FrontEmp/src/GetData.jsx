import React, { useState } from 'react'
import axios from 'axios'

const GetData = () => {
    let [hno,setHno]=useState()
    let [data,setdata]=useState("")
    let [msg,setMsg]=useState("")
    let fun=(e)=>{
        setHno(e.target.value)
    }
    let getbyid=()=>{

        axios.get(`http://localhost:9090/getbyid/${hno}`).then((res)=>{
            if(res.data)
            {
                setdata(res.data)
                setMsg("")
            }
            else{
                setdata("")
                setMsg("Please Enter the Correct ID")
            }
        })
    }
  return (
    <div>
        <div>{msg}</div>
        <input type='text' placeholder='Enter Your ID' value={hno} onChange={fun}/>
        <button onClick={getbyid}>Show</button>
       {data!=""&& <table>
        <tr><th>ID</th><td>{data._id}</td></tr>
        <tr><th>Name</th><td>{data.name}</td></tr>
        <tr><th>Dept</th><td>{data.dept}</td></tr>
        <tr><th>Sal</th><td>{data.sal}</td></tr>


        </table>}
    </div>
  )
}
export default GetData
