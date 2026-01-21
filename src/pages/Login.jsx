import React from 'react'

const Login = () => {
  return (
    <div className='flex  flex-col justify-center items-center border-radius-2xl m-auto '>
        <form className='flex flex-col space-y-8 bg-emerald-500 m-25 p-15' action="post">
            <h2 className="text-center text-6xl font-semibold">Login</h2>
            
            <input className='border-1 px-2  rounded' type="text" placeholder="Email" />
           
            <input className='border-1 px-2 rounded' type="password" placeholder="Password" />
            
            <button className='bg-blue-400 m-auto text-white px-5 py-2 rounded' type="submit">Login</button>
            
        </form>
    </div>
  )
}

export default Login    