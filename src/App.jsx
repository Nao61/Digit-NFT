import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import CreateSell from './components/CreateSell'
import BuildProfile from './components/BuildProfile'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <Hero />
      <Collections />
      <CreateSell />
      <BuildProfile />
      <Footer />
    </div>
  )
}

export default App