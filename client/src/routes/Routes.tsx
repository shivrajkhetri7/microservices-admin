import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Login from "../component/Login/Login";
import SignUp from "../component/Login/SignUp";
import { About } from "../view/page/about";
import { Dashboard } from "../view/page/dashboard";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Dashboard/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'/about',
        element:<About/>
    }
])

export default router;
