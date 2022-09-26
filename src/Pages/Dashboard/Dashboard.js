import React, { useState } from 'react'
import Saved from './Saved'
import AppliedIn from './AppliedIn'
import Notifications from './Notifications'



const Dashboard = () => {

  const [openTab, setOpenTab] = React.useState(1);

  return (
    <div className='md:flex gap-3 flex-wrap justify-center'>
        {/* tab header */}
        <div className='flex flex-wrap basis-1/2'>
          <div className=''>
            <ul role='tablist' className='flex mb-0 list-none flex-wrap pt-3 pb-4'>
              <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'><a href="#saved" className={(openTab === 1 ? "text-white bg-gray-600" : "text-gray-600 bg-white")} onClick={e => { e.preventDefault(); setOpenTab(1) }} data-toggle="tab" role="tablist">Saved</a></li>
              <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'><a href="#applied" className={(openTab === 2 ? "text-white bg-gray-600" : "text-gray-600 bg-white")} onClick={e => { e.preventDefault(); setOpenTab(2) }} data-toggle="tab" role="tablist">Applied In</a></li>
            </ul>
          </div>
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">
            <div className={openTab === 1 ? "block" : "hidden"} id="saved">
              <Saved />
            </div>
          </div>
          <div className="tab-content tab-space">
            <div className={openTab === 2 ? "block" : "hidden"} id="applied">
              <AppliedIn />
            </div>
          </div>
        </div>
        </div>


      {/* notifications */}
      <div className='md:basis-1/5'>
        <Notifications />
      </div>
    </div>
  )
}

export default Dashboard