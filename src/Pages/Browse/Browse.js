import React from 'react'
import PostPreview from '../../Components/Post/PostPreview'
import Searchbar from '../../Components/Searchbar/Searchbar'
import Filter from './Filter'

const Browse = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-wrap gap-2 justify-center'>
        <div className="post-list flex flex-col gap-2">
      <Searchbar />
          <PostPreview />
        </div>
        <Filter />
      </div>
    </div>
  )
}

export default Browse