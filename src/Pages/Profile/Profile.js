import React,{useState} from 'react'
import EditModal from './EditModal';

const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="container bg-green-100 w-full m-auto">
      <div className="avatar">
        <img class='mx-auto rounded-full hover:opacity-50' src="https://miro.medium.com/fit/c/176/176/1*H39W4X8OkY62VMZcfh3Rog.png" alt="avatar" />
      </div>
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-700" id='name'>Rajan Yadav</h1>
      <h5 className="text-center md:text-xl text-gray-500" id='email'>rajanyadav_20618@aitpune.edu.in</h5>

      {/* edit profile pop-up trigger */}
      <button className='flex gap-2 justify-center px-6 py-2 my-3 rounded-full border-blue-300  border-2 w-fit m-auto cursor-pointer' onClick={handleClick}>
        <div className='text-blue-500 text-sm'>Edit Details</div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3b82f6" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
        </svg>
      </button>

      { showModal ? (<EditModal closeModal={closeModal}/>):
      <div>
      <div className='md:flex items-start justify-center sm:gap-3 md:gap-5 flex-wrap border-b p-3 my-3'>
        <label htmlFor="" className='uppercase text-gray-500 md:basis-1/6'>Year & Branch</label>
        <div className='dropdown relative'>
          <button className='dropdown-toggle' type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">This is a dropdown</button>
          <ul className="dropdown-menu" aria-labelledby='dropdownMenuButton1'>
            <li><a href="" className='dropdown-item'>dsds</a></li>
            <li><a href="" className='dropdown-item'>dsds</a></li>
            <li><a href="" className='dropdown-item'>dsds</a></li>
          </ul>
        </div>
      </div>
      <div className='md:flex items-start justify-center sm:gap-3 md:gap-5 flex-wrap border-b p-3 my-3'>
        <label htmlFor="" className='uppercase text-gray-500 md:basis-1/6'>Skills</label>
        <div className='text-3xl md:basis-1/2'>
          <ul className='flex flex-wrap gap-1'>
            <li className='text-sm border-2 border-gray-500 w-fit px-4 py-2 rounded-full w-80'>Skill Name</li>
          </ul>
        </div>
      </div>
      </div>
    }
    </div>
  )
}

export default Profile