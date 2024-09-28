import React from 'react'
import Avatar from 'react-avatar';
import { CiImageOn } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
function CreatePost() {
    return (

        <div className='w-[100%] mt-2' >
            {/* // upper portion */}

            <div className=' flex items-center justify-around my-3 cursor-pointer border-b border-gray-300'>
                {/* main div below whhich for you , following */}
                <div>
                    <h1 className='font-bold text-gray-600 text-lg hover:bg-gray-300 hover:w-full px-5 py-2 rounded-sm'>For you</h1>
                </div>
                <div>
                    <h1 className='font-bold text-gray-600 text-lg hover:bg-gray-300 hover:w-full px-5 py-2 rounded-sm'>Following</h1>
                </div>

            </div>
            <div className='mt-2'>
                {/* feeds */}
                <div className='flex p-2 m-2'>
                    <div>
                        <Avatar src='https://techcrunch.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-15-at-11.04.49-AM.png?resize=229,680' size="30" round={true} />
                    </div>
                    <input type='text' className='px-5 border-none outline-none font-medium' placeholder='What is happening?!' />

                </div>
                <div>
                    <div className='flex space-x-6 mx-5  my-3 border border-gray-200 shadow-lg p-2 m-2 items-center justify-between '>
                        <div className='flex space-x-6 mx-5  my-3'>

                            <div>
                                <CiImageOn />
                            </div>
                            <div>
                                < CiBoxList />
                            </div>
                            <div>
                                < BsEmojiSmile />
                            </div>
                            <div>
                                < CiLocationOn />
                            </div>
                        </div>
                        <div >

                            <button className='bg-blue-500 text-white px-5 p-2 m-1 rounded-full hover:bg-blue-400'>Post</button>
                        </div>
                    </div>


                </div>
            </div>

    <div className='justify-items-center'>
        <span className='text-blue-500 items-center m-2 p-2 px-10  border-b border-gray-300'>Show 245 posts</span>
    </div>
        </div>


    )
}

export default CreatePost
