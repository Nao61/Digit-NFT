import React from 'react'
import Frame from '../assets/icons/Frame.svg'


function Footer() {
  return (
    <footer className="bg-white py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col  gap-6">
            <div className="w-12 h-12 rounded-full flex items-start justify-start flex-shrink-0">
              <img src={Frame} alt="" />
            </div>
    
        <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-lg font-semibold">
              Create Explore & Collect Digital  NFTs
            </p>
          <div className="flex space-x-8 text-sm">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">About Us</a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer