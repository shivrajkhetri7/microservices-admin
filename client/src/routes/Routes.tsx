import React from "react";
import {createBrowserRouter} from 'react-router-dom';

import Login from "../component/auth/Login";
import SignUp from "../component/auth/SignUp";
import { Dashboard } from "../view/dashboard";
import { Expense } from "../view/expense";
import { Events } from "../view/event";
import { Analysis} from "../view/analysis";
import { About } from "../view/about";

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
        path:'/',
        element:<Dashboard/>
    },
    {
        path:'/expense',
        element:<Expense/>
    },
    {
        path:'/analysis',
        element:<Analysis/>
    },
    {
        path:'/event',
        element:<Events/>
    },
    {
        path:'/about',
        element:<About/>
    },
])

export default router;
