import React from 'react'
import FAQ from './FAQ'
import { Link } from 'react-router-dom'
import DomainList from '../../Components/Category/DomainList'

const Home = () => {
  return (
    <div className="d-flex">
      <div className="banner hover:opacity-5">
        <img src="" alt="" />
      </div>
      <header>
        <h1 className='text-5xl md:text-6xl xl-text-7xl font-bold tracking-tighter mb-10 text-center'>Internships by Alumini</h1>
        <form action="" className='flex justify-center gap-2 flex-wrap'>
          <input type="text" placeholder='Search your Domain' className='focus:outline-none border-2 p-3'/>
          <button type='submit' className='bg-blue-600 px-6 text-gray-200'>Search</button>
        </form>
        <ul className='flex gap-3 justify-center pt-5 text-xl flex-wrap'>
          {/* <li className='font-bold'>Popular Domains - </li><Link to={'/browse'}><DomainList /></Link> */}
        </ul>
      </header>
      <FAQ />
    </div>
  )
}

export default Home