import React from 'react'

const EditModal = (props) => {

    const pickBranch = () => {

    }

    return (
        <div>
            <div className="filter-container">
                <div>
                    <select name="branch-list" id="branch-list" onChange={pickBranch} className='p-2 appearance-none bg-slate-500 text-gray-100'>
                        <option value="Entc">Electronics & Telecommunications</option>
                        <option value="Comp">Computer Science</option>
                        <option value="IT">Information Technology</option>
                        <option value="Mech">Mechanical</option>
                    </select>
                </div>
            </div>
            <button onClick={props.closeModal} type='button' className='p-2 bg-blue-400'>Save Changes</button>
        </div>
    )
}

export default EditModal