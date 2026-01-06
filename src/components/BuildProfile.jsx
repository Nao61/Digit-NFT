import React from 'react'
import Frame122 from "../assets/images/Frame122.jpg"

function BuildProfile() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div 
          className="relative rounded-3xl overflow-hidden h-[22rem] md:h-[26rem] lg:h-[28rem] flex items-center justify-center"
          style={{
            backgroundImage: `url(${Frame122})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 text-center px-4">
            <h2 className="
              text-white font-bold
              text-3xl
              md:text-6xl
              lg:text-8xl
              mb-10
            ">
              Build your NFT profile
            </h2>

            <p className="
              text-white/90
              text-sm
              md:text-xl
              lg:text-4xl
              mb-10
            ">
              Join almost 10k NFT profiles on Digit !
            </p>

            <button className="
              bg-white text-black
              px-6 py-3
              rounded-full
              text-sm md:text-base
              font-medium
              hover:bg-black hover:text-white
              transition
            ">
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildProfile
