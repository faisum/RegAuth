import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin=(e)=>{
    e.preventDefault();
  const storedUser=JSON.parse(localStorage.getItem("user"));

  if(!storedUser){
    alert("No user found, please register first");
    return;
  }

  if(
    storedUser.email===email &&
    storedUser.password===password
  ){
    alert("Login Successful");
  }else{
    alert("Invalid Credentials");
  }
  };
  return (
    <div className='flex  flex-col justify-center items-center border-radius-2xl m-auto '>
        <form className='flex flex-col space-y-8 bg-emerald-500 m-25 p-15' onSubmit={handleLogin}>
            <h2 className="text-center text-6xl font-semibold">Login</h2>
            
            <input onChange={(e)=>setEmail(e.target.value)} className='border-1 px-2  rounded' type="text" placeholder="Email" />
            <input onChange={(e)=>setPassword(e.target.value)} className='border-1 px-2 rounded' type="password" placeholder="Password" />
            <button className='bg-blue-400 m-auto text-white px-5 py-2 rounded' type="submit">Login</button>
            
            <a href="/Registration Page">Don't have an account? <li className='list-none text-cyan-100'>Register here</li></a>
        </form>
    </div>
  )
}

export default Login    