import React from 'react'
import { GoHome } from "react-icons/go";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom';

import { IoIosLogOut } from "react-icons/io";

function LeftSideBar() {
    return (
        <div className='w-[20%]'>
            <div className='my-2'>
                <div>
                    <img width={"28px"} src='https://loodibee.com/wp-content/uploads/Twitter-X-Logo.png' alt='twitter logo' />
                </div>
                <div>
                    <Link to={"/"} className='flex items-center my-2 hover:bg-gray-200 rounded-full cursor-pointer  '>
                        <div className='py-2'>

                            <GoHome size={"24px"}/>
                        </div>
                        <h1 className='font-semibold text-lg'>Home</h1>

                    </Link>
                    <div className='flex items-center my-2 hover:bg-gray-200 rounded-full cursor-pointer '>
                        <div className='py-2'>

                            <CiHashtag  size={"24px"}/>
                        </div>
                        <h1 className='font-semibold text-lg'>Explore</h1>

                    </div>
                    <div className='flex items-center my-2 hover:bg-gray-200 rounded-full cursor-pointer '>
                        <div className='py-2'>

                            <IoIosNotificationsOutline size={"24px"}/>
                        </div>
                        <h1 className='font-semibold text-lg'>Notifications</h1>

                    </div>
                    <div className='flex items-center my-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                        <div className='py-2'>

                            <CiBookmark size={"24px"}/>
                        </div>
                        <h1 className='font-semibold text-lg'>Bookmarks</h1>

                    </div>
                    <div className='flex items-center my-2 hover:bg-gray-200 rounded-full cursor-pointer '>
                        <div className='py-2'>

                            <CiViewList size={"24px"}/>
                        </div>
                        <h1 className='font-semibold text-lg'>Lists</h1>

                    </div>
                    <Link to="/profile" className='flex items-center my-2 hover:bg-gray-200 rounded-full cursor-pointer '>
                        <div className='py-2'>

                            <GoPerson size={"24px"}/>
                        </div>
                        <h1 className='font-semibold text-lg'>Profile</h1>

                    </Link>
                    <div className='flex items-center my-2 hover:bg-gray-200 rounded-full cursor-pointer '>
                        <div className='py-2'>

                            <IoIosLogOut size={"24px"}/>
                        </div>
                        <h1 className='font-semibold text-lg'>Logout</h1>

                    </div>
                    <button className='bg-blue-500 text-white my-2 border-none text-lg py-2 w-full rounded-full  font-semibold hover:bg-blue-400'>Tweet</button>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar
