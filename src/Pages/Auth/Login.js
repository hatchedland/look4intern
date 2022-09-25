import React from 'react'
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Contexts/Auth'

const Login = () => {

  const emailRef = useRef()
  const passwordRef = useRef()

  const { signIn } = useAuth()

  const Navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    const { error } = await signIn({ email, password })

    if (error){
      alert('Not able to create account at the moment.')
    } else{
      Navigate('/')
    }
  }

  return (
    <div className='w-full bg-indigo-200 m-auto max-w-xs rounded p-5'>
      <header>
        <img className='mx-auto mb-5 w-20' src="https://miro.medium.com/fit/c/176/176/1*H39W4X8OkY62VMZcfh3Rog.png" alt="" />
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='block mb-2 text-indigo-500 text-left' for="email">Email</label>
          <input className='w-full border-2 border-indigo-500 rounded p-2 outline-none' id='input-email'type="email" name="email" ref={emailRef}/>
        </div>
        <div>
          <label className='block my-2 text-indigo-500 text-left' for="password">Password</label>
          <input className='w-full border-2 border-indigo-500 rounded p-2 outline-none' id='input-password'type="password" name="password" ref={passwordRef}/>
        </div>
        <div>
          <input type="submit" value="Submit" className='w-full bg-indigo-700 hover:bg-pink-400 text-white font-bold px-2 py-4 my-6 rounded' />
        </div>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  )
}

export default Login