import React, { useState } from 'react'
import EthereumEllipse from '../assets/icons/EthereumEllipse.svg'
import cyberPunk from '../assets/images/cyberPunk.png'
import durolost from '../assets/images/durolost.png'
import spaceX from '../assets/images/spaceX.png'
import snoppDogg from '../assets/images/snoppDogg.png'

function Collections() {
  const [activeFilter, setActiveFilter] = useState('All categories')

  const filters = ['All categories', 'Art', 'Celebrities', 'Gaming', 'Sport']
  
  const collections = [
    { 
      id: 1, 
      name: 'CyberPunk', 
      price: '68',
      image: cyberPunk,
    },
    { 
      id: 2, 
      name: 'Durolost Boll - Upper', 
      price: '68',
      image: durolost,
    },
    { 
      id: 3, 
      name: 'Space X Wiper', 
      price: '68',
      image: spaceX,
    },
    { 
      id: 4, 
      name: 'Snoop Dogg', 
      price: '68',
      image: snoppDogg,
    },
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold">Our Collections</h2>
          <a href="#" className="text-sm font-medium hover:underline">
            View more
          </a>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === filter
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((nft) => (
            <div key={nft.id} className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-lg transition">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={nft.image} 
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-base">{nft.name}</h3>
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <img src={EthereumEllipse} alt="" className="w-full h-full object-cover" /> 
                    <span>{nft.price}</span>
                  </div>
                </div>
                <button className="w-full bg-white border-2 border-black text-black py-2.5 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
                  Place a Bid
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections