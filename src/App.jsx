import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import CreateSell from './components/CreateSell'
import BuildProfile from './components/BuildProfile'
import Footer from './components/Footer'
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import TopSales from "./components/TopSales"
import CollectionsPage from "./components/CollectionsPage"
import Blog from "./components/Blog"
import AboutUs from "./components/AboutUs"

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
        
        <Route path="/top-sales" element={<><Navbar /><TopSales /><Footer /></>} />
        <Route path="/collections" element={<><Navbar /><CollectionsPage /><Footer /></>} />
        <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><AboutUs /><Footer /></>} />
      </Routes>
    </div>
  )
}

export default App