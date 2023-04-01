
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpages from './Pages/Mainpages';
import "./Pages/css/Mainpages.css"
import Home from "./Pages/Home"
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpages />} />
        <Route path="*" element={<h1>No pages</h1>} />
	<Route path="Home" element={<Home/>} />   
	<Route path="Login" element={<Login/>}/>
      </Routes>
	</BrowserRouter>
  );
}

export default App;
