import React, { useState } from 'react';
import Frame from '../assets/icons/Frame.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-around gap-24">
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <img src={Frame} alt="Logo" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-black hover:text-gray-600">Home</a>
            <a href="#sales" className="text-sm font-medium text-secondary hover:text-black">Top sales</a>
            <a href="#collections" className="text-sm font-medium text-secondary hover:text-black">Collections</a>
            <a href="#blog" className="text-sm font-medium text-secondary hover:text-black">Our blog</a>
            <a href="#about" className="text-sm font-medium text-secondary hover:text-black">About us</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-sm font-medium text-black">Sign up</button>
            <button className="hidden md:block bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition">
              Connect Wallet
            </button>

            <button
              className="md:hidden flex items-center justify-center p-2 rounded-md focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-3">
            <a href="#home" className="text-sm font-medium text-black hover:text-gray-600">Home</a>
            <a href="#sales" className="text-sm font-medium text-secondary hover:text-black">Top sales</a>
            <a href="#collections" className="text-sm font-medium text-secondary hover:text-black">Collections</a>
            <a href="#blog" className="text-sm font-medium text-secondary hover:text-black">Our blog</a>
            <a href="#about" className="text-sm font-medium text-secondary hover:text-black">About us</a>
            <div className="flex justify-center gap-3 mt-4">
            <button className="text-sm font-medium text-secondary hover:text-black">Sign up</button>
            <span className="inline-block w-1 h-10 bg-black"></span>
            <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition">
              Connect Wallet
            </button>
            </div>
            
          </div>
          
        )}
      </div>
    </nav>
  );
}

export default Navbar;
