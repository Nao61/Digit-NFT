import React from 'react'
import Frame122 from "../assets/images/Frame122.png";


function BuildProfile() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div 
          className="relative rounded-3xl overflow-hidden h-96 flex items-center justify-center text-center"
          style={{
            backgroundImage: `url(${Frame122})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
        </div>
      </div>
    </section>
  )
}

export default BuildProfile