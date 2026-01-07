import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import CreateSell from './components/CreateSell'
import BuildProfile from './components/BuildProfile'
import Footer from './components/Footer'
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"

function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
       <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <Collections />
            <CreateSell />
            <BuildProfile />
            <Footer />
          </>
        }
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      
    </Routes>
    </div>
  )
}

export default App