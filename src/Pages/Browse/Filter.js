import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Filter = () => {

    // states
    const [payRange, setPayRange] = useState(50);
    const [remoteCheck, setRemoteCheck] = useState(true);


    // toggle btn
    const toggleClass = 'translate-x-6'
    function handleRemoteCheck(e) {
        setRemoteCheck(!remoteCheck)
    }


    return (
        <div className='md:w-80 container flex flex-col gap-4 md:gap-8 p-2 md:p-5'>
            {/* Domain Picker */}
            <div className='flex flex-col gap-2'>
                <label for="domain" class="block text-sm font-medium text-gray-900">Domain</label>
                <select name="" id="domain" className=' p-1 rounded-sm'>
                    <option value="developer">Data Science</option>
                    <option value="Android Developer">Web Development</option>
                    <option value="Android Developer">Mobile Development</option>
                    <option value="developer">Content Writing</option>
                    <option value="developer">Marketing</option>
                </select>
            </div>
            {/* Role Picker */}
            <div className='flex flex-col gap-2'>
                <label for="role" class="block text-sm font-medium text-gray-900">Role</label>
                <select name="" id="role" className='p-1 rounded-sm'>
                    <option value="developer">Webdeveloper</option>
                    <option value="Android Developer">Flutter Developer</option>
                    <option value="Android Developer">Android Developer</option>
                    <option value="developer">Webdeveloper</option>
                </select>
            </div>
            {/*  Pay Range Slider */}
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                    <label for="pay-range" class="block mb-2 text-sm font-medium text-gray-900"><span>Pay</span></label>
                    <span className='text-3xl italic'>{100 - payRange}<span className='text-base'>K/Month</span></span></div>
                <div className=''>
                    <input id="pay-range" type="range" value={payRange} min="0" max="100" class=" w-full h-2 my-1 rounded appearance-none cursor-pointer range-lg bg-slate-400" onChange={(e) => setPayRange(e.target.value)} />
                    <div className='flex justify-between'>
                        <div className='flex gap-0.5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>100k/month</span>
                        </div>
                        <div className='flex gap-0.5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>0k/month</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Remote Check */}
            <div className='flex gap-2 justify-between align-middle border-2 border-gray-400 p-2 md:p-5 rounded-sm'>
                <label for="remote-check" class="block mb-2 text-sm font-medium text-gray-900 translate-y-1">Remote?</label>
                <div className="toggle-check-wrap">
                    {/* value = remoteCheck */}
                    <div className=''>{remoteCheck}</div>
                    {/* not rendering :( */}
                    <div className="toggle-checker bg-gray-200 w-12 h-7 rounded-full cursor-pointer" onClick={handleRemoteCheck}>
                        <div className={'bg-slate-500 w-6 h-6 rounded-full translate-y-0.5 ease-out duration-150 ' + (remoteCheck ? toggleClass : '')}></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Filter