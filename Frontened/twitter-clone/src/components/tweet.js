import React from 'react'
import Avatar from 'react-avatar';
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

import { CiBookmark } from "react-icons/ci";
import { BsFileBarGraph } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
function Tweet() {
    return (

        <div className='border-b border-gray-300'>

            <div className='flex m-3 p-2 space-x-2 '>
            <Avatar src='https://techcrunch.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-15-at-11.04.49-AM.png?resize=229,680' size="30" round={true} />
            
                <div>

                    <div className='flex items-center space-x-1'>

                        <h1 className='font-semibold text-sm '>Oshi Agrawal</h1>
                        <p className='text-gray-500 text-sm '>@sername . 1m</p>
                    </div>
                    <div >
                        <p>
                            Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.
                        </p>
                    </div>
                    <div className='flex justify-between m-2 '>

                        <div className='flex space-x-1 items-center '>
                           <div className='cursor-pointer hover:bg-gray-300 rounded-full'>

                            <FaRegComment />
                           </div>
                            <p>0</p>
                        </div>
                        <div className='flex space-x-1 items-center'>
                            <div className='cursor-pointer hover:bg-gray-300 rounded-full'>

                            < FaRegHeart/>
                            </div>
                            <p>0</p>
                        </div>

                        <div className='flex space-x-1 items-center'>
                            <div className='cursor-pointer hover:bg-gray-300 rounded-full'>

                            <BsFileBarGraph />
                            </div>
                            <p>0</p>
                        </div>
                        <div className='flex space-x-1 items-center '>
                            <div className='cursor-pointer hover:bg-gray-300 rounded-full'>

                            < CiBookmark />
                            </div>
                            <div className='cursor-pointer hover:bg-gray-300 rounded-full'>

                            <CiShare2 />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Tweet
