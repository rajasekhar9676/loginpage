import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/register',{name,email,password})
    .then(result=>{console.log(result)
      navigate('/login') 
  })
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white w-25 rounded p-3 '>
      <h2>Register</h2>
     
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
        <label htmlFor='name' className='text-align-start'>Name</label>
        <input type='text' id='name' className='form-control rounded-0' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='mb-3'>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' className='form-control' onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className='mb-3'>
        <label htmlFor='password'>Password</label>
        <input type='password' id='email' className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
        </form>
      <p>Already have an Account</p>
      <Link to='/login' type='button' className='btn btn-default border w-100 bg-light text-decoration-none'>Login</Link> 
    
      </div>
    </div>
  )
}

export default Signup
