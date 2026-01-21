import React from 'react'

const Register = () => {
  return (
    <div>

      <div>

        <form action="post">

          <h2>Registration Page</h2>

          <textarea name="name" placeholder='name' id=""></textarea>

          <textarea name="email" placeholder='email' id=""></textarea>

          <textarea name="phone-number" placeholder='phone-number' id=""></textarea>

          <textarea name="password" placeholder='password' id=""></textarea>

          <button>Register</button>

        </form>

      </div>

    </div>
  )
}

export default Register 
