import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Login from "../component/Login/Login";
import SignUp from "../component/Login/SignUp";
import { Sample } from "../component/sampleFile/sample";

const router = createBrowserRouter([
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:"/",
        element:<Sample/>
    }
])

export default router;
