import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home.jsx';
import './App.css'

const App = () => {
    return (
        <div className='app'>
            <Home/>
            <h1>this is app</h1>
        </div>
    );
};
export default App;