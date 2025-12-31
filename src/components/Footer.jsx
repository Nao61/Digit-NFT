import React from 'react'
import Frame from '../assets/icons/Frame.svg'


function Footer() {
  return (
    <footer className="bg-white py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
              <img src={Frame} alt="" />
            </div>
            <p className="text-sm font-medium">
              Create Explore & Collect Digital  NFTs
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">About Us</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer