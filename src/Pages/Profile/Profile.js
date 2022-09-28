import React, { useState, useEffect } from 'react'
import EditModal from './EditModal';




const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

  const [user, setUser] = useState([])



  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUser(data)
      })
      console.log(">>",user)
  }

  const myKeys = Object.keys(user);
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="container bg-green-100 w-full m-auto">
      {user.map((user) => (
        // user check through email

        user.email === "Shanna@melissa.tv" ? (
          <div>
            <div className="avatar">
              <img class='mx-auto rounded-full hover:opacity-50' src="" alt="avatar" />
            </div>
            <iframe width="560" height="315" src="https://spankbang.com/777pk/embed/" frameborder="0" scrolling="no" allowfullscreen></iframe>
            <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-700" id='name'>{user.name}</h1>
            <h5 className="text-center md:text-xl text-gray-500" id='email'>{user.email}</h5>
            {/* edit profile pop-up trigger */}
            <button className='flex gap-2 justify-center px-6 py-2 my-3 rounded-full border-blue-300  border-2 w-fit m-auto cursor-pointer' onClick={handleClick}>
              <div className='text-blue-500 text-sm'>Edit Details</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3b82f6" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
            </button>
            {
              // 
            }

            {showModal ? (<EditModal closeModal={closeModal} />) :

              <div>
                {/* // user details */}
                {/* // nested map */}

                <div className='md:flex items-start justify-center sm:gap-3 md:gap-5 flex-wrap border-b p-3 my-3'>
                  <h5 className='uppercase text-gray-500 md:basis-1/6'>Year & Branch</h5>
                  <div className='text-3xl md:basis-1/2'>
                    {/* change it to year */}
                    DKskd
                  </div>
                </div>
                <div className='md:flex items-start justify-center sm:gap-3 md:gap-5 flex-wrap border-b p-3 my-3'>
                  <h5 className='uppercase text-gray-500 md:basis-1/6'>Skills</h5>
                  <div className='text-3xl md:basis-1/2'>
                    Add Skills
                  </div>
                </div>
              </div>
            }
          </div>

        ) : null
      ))}

    </div>
  )
}

export default Profile