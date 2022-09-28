import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <nav className="relative flex flex-wrap content-center justify-between px-2 py-2 bg-gray-700 mb-3">
        <div className="container px-5 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div>
              <NavLink to="/" className="k mr-4 h-min text-white" >
                logo
              </NavLink>
            </div>
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
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li className="nav-item">
                <NavLink className="px-5 py-2 flex items-center leading-snug text-white hover:opacity-75" activeClassName="is-active" to="/" exact>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="px-5 py-2 flex items-center leading-snug text-white hover:opacity-75" activeClassName="is-active" to="/browse" >Browse</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="px-5 py-2 flex items-center leading-snug text-white hover:opacity-75" activeClassName="is-active" to="/dashboard" >Dashboard</NavLink>
              </li>
              <li className="nav-item relative" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {/* profile dropdown */}
                {(dropdownOpen) ?
                  <ul className='dropdown-menu fixed bg-gray-400 rounded font-medium'>
                    <li className=' '>
                      <NavLink className="flex items-center px-5 py-2 leading-snug text-white hover:opacity-75 bg-black rounded" activeClassName="is-active" to="/profile" exact>Profile</NavLink>
                    </li>
                    {/* modal wrap */}
                    <li className="flex items-center justify-center">
                      {console.log(showModal)}
                      <button className=' px-5 py-2' onClick={() => setShowModal(true)}>Open Modal</button>
                      {console.log(showModal)}
                    </li>
                    {showModal ? (
                      // modal main
                      <div className="fixed inset-0 z-10 overflow-y-auto">
                        {console.log(showModal)}
                        <div className="flex items-center min-h-screen px-4 py-8">
                          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                            <div className="mt-3 sm:flex">
                              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                <h4 className="text-lg font-medium text-gray-800">
                                  Log Out
                                </h4>
                                <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                  Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, sed do
                                  eiusmod tempor incididunt ut labore
                                  et dolore magna aliqua.
                                </p>
                                <div className="items-center gap-2 mt-3 sm:flex">
                                  <button
                                    className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                    onClick={() => setShowModal(!showModal)}> Logout </button>
                                  <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                    onClick={() => setShowModal(!showModal)}> Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {/* /showModal */}
                  </ul> : null}
                {/* /dropdownOpen */}
              </li>
            </ul>
          </div>
        </div>
      </nav >

    </>
  )
}

export default Navbar