import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './home'
import Login from './login'
import Feed from './feed'
import Profile from './profile'

function Body() {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Home/>,
            children:[
                {
                path:"/",
                element:<Feed/>
            },
                {
                path:"/profile",
                element:<Profile/>
            },
        ]
        },
        {
            path:"/login",
            element:<Login/>
        },
    ])
    return (
       <div>

<RouterProvider  router={appRouter}/>
       </div>
        
     
    )
}

export default Body;
