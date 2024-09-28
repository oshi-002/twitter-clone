import React from 'react'
import LeftSideBar from './leftSideBar'
import Feed from './feed'
import RightSideBar from './rightSideBar'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <div className='flex justify-between w-[80%] mx-auto '>
            <LeftSideBar/>
            <Outlet/>


            <RightSideBar/>
        </div>
    )
}

export default Home
