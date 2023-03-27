import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home';
import SearchCars from './components/SearchCars';
import AddCars from './components/AddCars';
import MyProfile from './components/MyProfile';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import './css/App.css'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchCar" element={<SearchCars />} />
        <Route path="/addCar" element={<AddCars />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
