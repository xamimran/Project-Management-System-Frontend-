import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Components
import { Signin, Home } from './components';

export const App = () => {
    return (
        <div>
            Hello From App
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Signin/>} />
                    <Route path="/home" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
