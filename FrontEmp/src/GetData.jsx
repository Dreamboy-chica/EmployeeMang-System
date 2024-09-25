import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GetData = () => {
  const [hno, setHno] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChangeID = (e) => {
    setHno(e.target.value);
  };

  const handleChangeDOB = (e) => {
    setDob(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const getById = async (e) => {
    e.preventDefault();
    if (!hno) {
      setMsg(<span className='enterid'>Please enter an Employee ID</span>);
      return;
    }

    setMsg('');
    try {
      const res = await axios.get(`http://localhost:9090/getbyid/${hno}`);
      if (res.data) {
        // Redirect to DisplayData and pass data
        navigate('/display', { state: { data: res.data } });
      } else {
        setMsg(<span className='enterid'>Please Enter the Correct ID</span>);
      }
    } catch (error) {
      setMsg(<span className='enterid'>Error fetching data</span>);
    }
  };

  return (
    <div>
      <div>{msg}</div>

      <form className='form' onSubmit={getById}>
        <div className='view'>
          <i className="fa-solid fa-lock m-2"></i><span>View</span>
        </div>

        <div className='empform'>
          <div>
            <label>Employee ID </label>
            <input type='text' value={hno} onChange={handleChangeID} />
          </div>

          <div>
            <label>Date of Birth </label>
            <input type='date' value={dob} onChange={handleChangeDOB} />
          </div>

          <div className='pwd'>
            <label>Password </label>
            <input type='password' value={password} onChange={handleChangePassword} />
          </div>

          <div className='sub'>
            <input type='submit' value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default GetData;
