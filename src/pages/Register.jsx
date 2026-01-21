import React from 'react'

const Register = () => {
  return (
    <div>

      <div className='flex justify-center items-center
       border-radius-2xl m-auto'>

        <form className='flex flex-col m-25 p-15' action="post">

          <h2 className=' text-center text-4xl  '>Registration Page</h2>

          <textarea name="name" placeholder='name' id=""></textarea>

          <textarea name="email" placeholder='email' id=""></textarea>

          <textarea name="phone-number" placeholder='phone-number' id=""></textarea>

          <textarea name="password" placeholder='password' id=""></textarea>

          <button className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>

        </form>

      </div>

    </div>
  )
}

export default Register 
