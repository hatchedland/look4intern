import React from 'react'
import { Routes, Route, Redirect } from 'react-router-dom';

import { useAuth } from './Contexts/Auth'
// pages

// user auth pages
import Signup from './Pages/Auth/Signup';
import Login from './Pages/Auth/Login';
// post login tabs
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
// import Saved from './Pages/Saved/Saved';
import Browse from './Pages/Browse/Browse';
import Dashboard from './Pages/Dashboard/Dashboard';


export default function RouteSwitch({ component: Component, ...rest }) {

    const { user } = useAuth()

    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
            <Route exact path='/profile' element={< Profile />}></Route>
            {/* <Route exact path='/saved' element={< Saved />}></Route> */}
            <Route exact path='/browse' element={< Browse />}></Route>
            <Route exact path='/dashboard' element={<Dashboard />}></Route>
            {/* <Route path='browse/:category'><FilteredList /></Route> */}
        </Routes>
    )
}