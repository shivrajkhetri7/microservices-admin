import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { Sample } from "../component/sampleFile/sample";
import LoginPage from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:"/",
        element:<LoginPage/>
    },{
        path:"/reset-password",
        element:<ForgotPassword/>
    }
])

export default router;
