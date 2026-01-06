import React from "react";
import Frame126 from '../assets/icons/Frame126.svg'
import cercle from '../assets/icons/cercle.svg'
import Rectangle4 from '../assets/images/Rectangle4.png'
import Rectangle3 from '../assets/images/Rectangle3.png'

function Hero() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-6">
              See the NFT
              <br />
              new world
            </h1>
            <p className="text-secondary text-lg mb-8 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              urna, nibh vitae bibendum. Et volutpat egestas sit pellentesque
              vitae.
            </p>

            <button className="bg-white text-black py-3 text-base font-medium transition flex items-center gap-2">
              Discover Vow
              <img src={Frame126} alt="" />
            </button>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center gap-8 mt-60">
              <div className="relative">
                <div className="absolute -top-36 -left-1 w-36 h-40 flex items-center justify-center">
                  <img src={cercle} alt="" />
               </div>
                <div className="w-56 h-96 rounded-full overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                     <img src={Rectangle3}  alt="" className="w-full h-full object-cover"/>
                  </div>
                </div>
                
              </div>
                   
              <div className="relative mt-12">
                <div className="hidden md:block w-56 h-96 rounded-full -translate-y-36 overflow-hidden">
                    <img src={Rectangle4}  alt="" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
