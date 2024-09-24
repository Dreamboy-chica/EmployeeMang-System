import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'


//get the all the data of database on visit on the homepage
const Home = () => {
  let [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:9090/getdata").then((res)=>{
      setData(res.data)
    })

  },[])

  //give data into sorted-form when we click on specific column
  let fun=(colname)=>{
    axios.get(`http://localhost:9090/sortdata/${colname}`).then((res)=>{
      setData(res.data)
    })
  }
  return (
    <div>
      <table>
        <tr>
          <th onClick={()=>fun('_id')}>ID</th>
          <th onClick={()=>fun('name')}>Name</th>
          <th onClick={()=>fun('gen')}>Gender</th>
          <th onClick={()=>fun('dept')}>Dept</th>
          <th onClick={()=>fun('sal')}>Salary</th>
          <th>Phno</th>

        </tr>
        {
          data.map((item)=>{
            return(<tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.gen}</td>
              <td>{item.dept}</td>

              <td>{item.sal}</td>
              <td>{item.phno}</td>

            </tr>)
          })
        }
      </table>
    </div>
  )
}

export default Home