import React from 'react'
import Wallet from '../assets/icons/Wallet.svg'
import Frame30 from '../assets/icons/Frame30.svg'
import Frame130 from '../assets/icons/Frame130.svg'
import Frame146 from '../assets/icons/Frame146.svg'


function CreateSell() {
  const steps = [
    { 
      icon: Wallet,
      title: 'Set up your wallet',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    { 
      icon: Frame30,
      title: "Add your NFT's",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    { 
      icon: Frame130,
      title: "Promote your NFT's",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    { 
      icon: Frame146,
      title: "Sell your NFT's",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-12">Create and Sell Now</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-[50px]">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-200 rounded-2xl p-6">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white mb-6">
                <img src={step.icon} alt="" className="w-8 h-8" />
              </div>

              <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-sm font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CreateSell