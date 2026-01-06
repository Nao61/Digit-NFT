import React, { useState } from 'react';
import Frame from "../assets/icons/Frame.svg";
import menuH from "../assets/icons/menuH.svg";
import menuX from "../assets/icons/menuX.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <>
      <nav className="border-b border-gray-200 bg-white">
        <div className="container mx-auto max-w-7xl px-6 py-10">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img src={Frame} alt="Logo" />
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium text-black hover:text-gray-600">Home</a>
              <a href="#sales" className="text-sm font-medium text-secondary hover:text-black">Top sales</a>
              <a href="#collections" className="text-sm font-medium text-secondary hover:text-black">Collections</a>
              <a href="#blog" className="text-sm font-medium text-secondary hover:text-black">Our blog</a>
              <a href="#about" className="text-sm font-medium text-secondary hover:text-black">About us</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden lg:block text-sm font-medium text-black">Sign up</button>
              <span className="hidden lg:inline-block w-1 h-10 bg-black"></span>
              <button className="hidden lg:block bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition">
                Connect Wallet
              </button>

              <button
                className="lg:hidden w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center focus:outline-none hover:bg-gray-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img src={menuH} alt="" />
              </button>
            </div>
          </div>
        </div>
      </nav>


      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <div className="flex items-end justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-300 focus:outline-none"
            >
              <img src={menuX} alt="" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 mb-8">
            <a href="#home" className="text-lg font-semibold text-black hover:text-gray-600">Home</a>
            <a href="#sales" className="text-lg font-normal text-secondary hover:text-black">Top sales</a>
            <a href="#collections" className="text-lg font-normal text-secondary hover:text-black">Collections</a>
            <a href="#blog" className="text-lg font-normal text-secondary hover:text-black">Our blog</a>
            <a href="#about" className="text-lg font-normal text-secondary hover:text-black">About us</a>
          </div>

          <div className="absolute left-6 right-6 flex items-center justify-center gap-4">
            <button className="text-base font-medium text-black">Sign up</button>
            <span className="inline-block w-px h-10 bg-black"></span>
            <button className="bg-black text-white px-6 py-2.5 rounded-full text-base font-medium hover:bg-gray-800 transition">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;