import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  async function handleSignOut() {
    
  }

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-gray-700 mb-3">
      <div className="container px-5 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <NavLink to="/" className="inline-block mr-4 whitespace-nowrap text-white" >
            logo
          </NavLink>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>

          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <NavLink className="px-5 py-2 flex items-center leading-snug text-white hover:opacity-75" activeClassName="is-active" to="/" exact>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="px-5 py-2 flex items-center leading-snug text-white hover:opacity-75" activeClassName="is-active" to="/saved" >Saved</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="px-5 py-2 flex items-center leading-snug text-white hover:opacity-75" activeClassName="is-active" to="/browse" >Browse</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="px-5 py-2 flex items-center leading-snug text-white hover:opacity-75" activeClassName="is-active" to="/profile" exact>Profile</NavLink>
              <button onClick={handleSignOut}>Sign out</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar