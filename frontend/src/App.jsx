import React from 'react';
import './App.css';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Staff from './pages/Staff';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/staff" element={<Staff />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
