import React, { useState } from 'react'

function Login() {
    const [isLogin , setLogin] = useState(true)
    const signupHandler =()=>{
        setLogin(!isLogin)
    }
    return (
        <div className=' flex w-screen h-screen items-center justify-center'>

            <div className='flex items-center justify-evenly space-x-10 w-[80%]'>
                <div>

                    <img width={"300px"} className='ml-5' src='https://loodibee.com/wp-content/uploads/Twitter-X-Logo.png' alt='twitter logo' />
                </div>
                <div>
                    <div>
                        <h1 className='font-bold text-5xl'>Happening now....</h1>
                    </div>
                    <h1 className='mt-9 font-semibold text-2xl'>{Login}</h1>
                    <form className='flex flex-col   '>
                        {
                            !isLogin && (<>
                            
                            <input type='text' placeholder='Name ' className='outline-gray-400 border-none my-1 p-2 rounded-lg font-semibold mt-2'/>
                            <input type='text' placeholder='Username 'className='outline-gray-400 border-none my-1 p-2 rounded-lg font-medium'/>
                            </>)
                        }
                        <input type='text' placeholder='Email' className='outline-gray-400 border-none my-1 p-2 rounded-lg font-medium'/>
                       <input type='text' placeholder='Password'className='outline-gray-400 border-none my-1 rounded-lg p-2 font-medium'/>
                       <button type='submit' className='bg-black text-white p-2 m-1 rounded-full   hover:bg-gray-800' >Login </button>
                       <h1>{isLogin ? "Do not have an account?":  "Already have a account?"} <span onClick={signupHandler} className='cursor-pointer  font-semibold hover:underline'>{isLogin ? "SignUp" :  "Login"}</span></h1>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login;
