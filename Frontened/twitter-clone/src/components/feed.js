import React from 'react'
import CreatePost from './createPost'
import Tweet from './tweet'

function Feed() {
    return (
        <div className='w-[50%] border border-gray-300'>
            <CreatePost/>
            <Tweet/>
            <Tweet/>
            
        </div>
    )
}

export default Feed
