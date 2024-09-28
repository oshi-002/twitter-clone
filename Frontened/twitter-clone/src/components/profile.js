import React from 'react'
import Avatar from 'react-avatar';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div className='w-[50%] border-l border-r border-gray-300 p-2'>
            <div className='flex items-center space-x-10 m-2  '>
                <Link to={"/"} className='cursor-pointer hover:bg-gray-300 rounded-full p-2 '>
                    <  FaLongArrowAltLeft size={"20px"} />
                </Link>
                <div>
                    < h1 className='font-bold text-lg'>Oshi Agrawal</h1>
                    < p>0 posts</p>
                </div>
            </div>

            <img src='https://marketplace.canva.com/EAE2cQaUHVA/1/0/1600w/canva-black-minimal-motivation-quote-linkedin-banner-HoRi-2buBWk.jpg' />
            <div className='justify-between flex items-center'>

                <div className='px-2 relative -top-10 rounded-full'>
                    <Avatar src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA3L2pvYjEwNjAtMTQucG5n.png' />
                </div>
                <div className='font-bold text-md border border-gray-400 rounded-full px-2 p-2 hover:bg-gray-200'>
                    <button>Edit profile</button>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='font-bold text-xl'>Oshi Agrawal</h1>
                    <p>@username</p>
                </div>
                <div className='m-1 text-sm'>
                    <p>Exploring the web's endless possibilities with mern stack| Problem Solver bt day coder by night | Coffee lover | Join me on this journey</p>
                </div>
                <div>

                </div>
            </div>

        </div>
    )
}

export default Profile
