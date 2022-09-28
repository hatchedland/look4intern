import React from 'react'

const NotificationPreview
    = () => {
        return (
            <div className='w-full bg-gray-100 p-2 flex flex-col gap-2'>
                <div className="flex justify-between gap-2 flex-wrap">
                    <div className="border border-gray-700 rounded-full px-4">Passed</div>
                    <div className="">Company Name</div>
                </div>
                <div className="text-3xl">Web Developer Role</div>
                <div className="flex justify-between gap-2">
                    <div className="">Date</div>
                    <div className="hidden lg:block">remove</div>
                </div>
            </div>
        )
    }

export default NotificationPreview
