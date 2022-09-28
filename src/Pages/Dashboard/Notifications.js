import React from 'react'
import NotificationPreview from '../../Components/Notification/NotificationPreview';

const Notifications = () => {

  const [openTab, setOpenTab] = React.useState(1);

  return (
    <div className='bg-blue-200 p-2'>
      <h1 className='text-3xl'>Notifications</h1>
      <div role='tablist' className='flex mb-0 list-none pt-3 pb-4 border-b-2'>
        <a href="#saved" className={(openTab === 1 ? "text-white bg-gray-600 " : "text-gray-600 bg-white ") + 'flex-auto py-3 pb-1 border-b-2 text-sm text-center'} onClick={e => { e.preventDefault(); setOpenTab(1) }} data-toggle="tab" role="tablist">All</a>
        <a href="#applied" className={(openTab === 2 ? "text-white bg-gray-600 " : "text-gray-600 bg-white ") + 'flex-auto py-3 pb-1 border-b-2 text-sm text-center'} onClick={e => { e.preventDefault(); setOpenTab(2) }} data-toggle="tab" role="tablist">Selected</a>
        <a href="#applied" className={(openTab === 3 ? "text-white bg-gray-600 " : "text-gray-600 bg-white ") + 'flex-auto py-3 border-b-2 text-sm text-center'} onClick={e => { e.preventDefault(); setOpenTab(3) }} data-toggle="tab" role="tablist">Rejected</a>
        <a href="#applied" className={(openTab === 4 ? "text-white bg-gray-600 " : "text-gray-600 bg-white ") + 'flex-auto py-3 border-b-2 text-sm text-center'} onClick={e => { e.preventDefault(); setOpenTab(4) }} data-toggle="tab" role="tablist">Invites</a>
      </div>

      {/* Some  */}
      <div className=" flex-auto">
        <div className="tab-content tab-space">
          <div className={openTab === 1 ? "block" : "hidden"} id="saved">
            {/* All notifications */}
            <NotificationPreview />
          </div>
        </div>
        <div className="tab-content tab-space">
          <div className={openTab === 2 ? "block" : "hidden"} id="applied">
            {/* Selected Notifications */}

          </div>
        </div>
        <div className="tab-content tab-space">
          <div className={openTab === 3 ? "block" : "hidden"} id="applied">
            {/* Rejected Notifications */}
            
          </div>
        </div>
        <div className="tab-content tab-space">
          <div className={openTab === 4 ? "block" : "hidden"} id="applied">
            {/* Invites Notifications */}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications