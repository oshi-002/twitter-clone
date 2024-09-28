import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';

function RightSideBar() {
    return (
        <div className='w-[25%] '>
            <div>
                <div className='flex bg-gray-300 rounded-full items-center space-x-2 m-3 p-2 '>
                    <CiSearch />
                    <div>

                        <input className='bg-gray-300 outline-none' type='text' placeholder='Search' />
                    </div>

                </div>
                <div className='p-2 m-3 bg-gray-300 rounded-lg mt-4'>
                    <h1 className='font-bold text-lg'>Subscribe to Premium</h1>
                    <p>Subscribe to unlock new features and if eligible , receive a share of ads revenue</p>
                    <button className='bg-black text-white rounded-full px-3 py-2 hover:bg-gray-800 mt-2'>Subscribe</button>
                </div>
                <div className='p-2 m-3 bg-gray-300 rounded-lg mt-4'>
                    <h1 className='font-bold text-lg'>Who to follow</h1>
                    <div>
                        <div className='mt-4 flex items-center justify-between'>

                            <div className='flex space-x-1 justify-between items-center'>
                                <div className=''>

                                    <Avatar src='https://techcrunch.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-15-at-11.04.49-AM.png?resize=229,680' size="30" round={true} />
                                </div>
                                <div className='ml-2'>
                                    <h1 className='font-semibold'>tomato</h1>
                                    <p className='text-sm'>@username</p>
                                </div>
                            </div>
                            <div>

                                <button className='bg-black text-white rounded-full px-3 py-1 hover:bg-gray-700'>Profile</button>
                            </div>

                        </div>
                        <div className='mt-4 flex items-center justify-between'>

                            <div className='flex space-x-1 justify-between items-center'>
                                <div>

                                    <Avatar src='https://techcrunch.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-15-at-11.04.49-AM.png?resize=229,680' size="30" round={true} />
                                </div>
                                <div className='ml-2'>
                                    <h1 className='font-semibold'>tomato</h1>
                                    <p className='text-sm'>@username</p>
                                </div>
                            </div>
                            <div>

                                <button className='bg-black text-white rounded-full px-3 py-1 hover:bg-gray-700'>Profile</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RightSideBar
