import React from 'react'

const Login = () => {
  return (
    <div className='flex  flex-col justify-center items-center borrder-radius-2xl m-auto '>
        <form className='flex flex-col space-y-8 bg-blue-400 m-25 p-15' action="post">
            <h2 className="text-center text-6xl font-bold">Login</h2>
            
            <input className='border-1 p-0.5' type="text" placeholder="Email" />
           
            <input className='border-1 p-0.5' type="password" placeholder="Password" />
            
            <button className='border-zinc-400' type="submit">Login</button>
            
        </form>
    </div>
  )
}

export default Login    