import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Register = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const navigate=useNavigate();
  const handleRegister=(e)=>{
    e.preventDefault();
    const user={
      email:email,
      password:password
    };

    localStorage.setItem("user",JSON.stringify(user));
    alert("Registration Successful");
  };

  return (
    <div>
      <div className='flex justify-center items-center '>
        <form onSubmit={handleRegister} className='flex flex-col space-y-4 m-25 p-15 bg-emerald-300' action="post">
          <h2 className=' text-center text-4xl font-semibold '>Registration Page</h2>
          <textarea className='border-1 px-2 rounded content-center' name="name" placeholder='name' id=""></textarea>
          <textarea onChange={(e)=>setEmail(e.target.value)} className='border-1 px-2 rounded content-center' name="email" placeholder='email' id=""></textarea>
          <textarea className='border-1 px-2 rounded content-center' name="phone-number" placeholder='phone-number' id=""></textarea>
          <textarea onChange={(e)=>setPassword(e.target.value)} className='border-1 px-2  rounded content-center' name="password" placeholder='password' id=""></textarea>
          <button className="bg-blue-500 m-auto text-white px-5 py-2 rounded">Register</button>
          <a href="/">Already have an account? <li className='list-none text-cyan-100'>Login</li></a>
        </form>
      </div>
    </div>
  )
}
export default Register 
