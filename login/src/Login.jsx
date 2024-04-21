import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/login',{email,password})
    .then(result=>{console.log(result)
        if (result.data==="Success"){
            navigate('/home') 
        }
      
  })
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white w-25 rounded p-3 '>
    <h2>Login</h2>
   
    <form onSubmit={handleSubmit}>
      
      <div className='mb-3'>
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className='mb-3'>
      <label htmlFor='password'>Password</label>
      <input type='password' id='email' className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
      </form>
    
    {/* <Link to='/login' path='/login'type='button' className='btn btn-default border w-100 bg-light text-decoration-none'>Login</Link>  */}
  
    </div>
  </div>
  )
}

export default Login
