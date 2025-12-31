import React from "react";
import Frame126 from '../assets/icons/Frame126.svg'
import Rectangle4 from '../assets/images/Rectangle4.png'
import Rectangle3 from '../assets/images/Rectangle3.png'

function Hero() {
  return (
    <section className="py-20 px-2">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-6xl md:text-6xl font-bold leading-tight mb-6">
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
            <div className="flex items-center justify-center gap-4">
              <div className="relative">
                <div className="w-48 h-64 rounded-full overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                     <img src={Rectangle3}  alt="" className="w-full h-full object-cover"/>
                  </div>
                </div>
                
              </div>
                   
              <div className="relative mt-12">
                <div className="w-48 h-64 rounded-full -translate-y-14 overflow-hidden">
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
