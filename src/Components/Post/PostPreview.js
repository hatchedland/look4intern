import React from 'react'

const PostPreview = () => {
    return (
        <div className='flex p-3 border-b-2 w-fit bg-slate-100 hover:bg-slate-200'>
            <div className='w-[40em]'>
                <h3 className='font-bold text-2xl'>Lorem, ipsum.</h3>
                <h5>Lorem ipsum dolor sit amet.</h5>
                <div className='flex p-2 gap-2'>
                    <div className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <span>Work from home</span>
                    </div>
                    <div className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Sripend</span>
                    </div>
                </div>
                <h5 className='uppercase text-gray-500 py-2'>Requirements</h5>
                <ul className='flex gap-3'>
                    <li className='text-sm border-2 border-gray-500 w-fit px-4 py-1 rounded-full'>Skills</li>
                </ul>

            </div>
            <div className='flex gap-3 flex-col'>
                <div className=''>
                    <h5 className='uppercase text-gray-500'>Start Time</h5>
                    <div className='font-bold text-2xl'>11/11/2020</div>
                </div>
                <div className=''>
                    <h5 className='uppercase text-gray-500'>Duration</h5>
                    <div className='font-bold text-2xl'>3 Months</div>
                </div>
            </div>
        </div>
    )
}

export default PostPreview