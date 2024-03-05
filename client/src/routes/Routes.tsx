import React from "react";
import {createBrowserRouter} from 'react-router-dom';

import SignIn from "../component/auth/SignIn";
import SignUp from "../component/auth/SignUp";
import { Dashboard } from "../view/dashboard";
import { Expense } from "../view/expense";
import { Events } from "../view/event";
import { Analysis} from "../view/analysis";
import { About } from "../view/about";
import {PageNotFound} from "../view/pageNotFound";
import ForgotPassword from "../component/auth/ForgotPassword";

const router = createBrowserRouter([
    {
        path:'/signin',
        element:<SignIn/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'/resetpassword',
        element:<ForgotPassword/>
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
    {
        path:'*',
        element:<PageNotFound/>
    },
])

export default router;
