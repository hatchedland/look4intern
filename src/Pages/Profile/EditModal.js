import React from 'react'

const EditModal = (props) => {

    return (
    <div>
        Lorem ipsum dolor sit amet.
        <button onClick={props.closeModal} type='button' className='p-2 bg-blue-400'>toggle</button>
    </div>
  )
}

export default EditModal