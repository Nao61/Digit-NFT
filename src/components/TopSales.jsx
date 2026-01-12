import React from "react";
import { TrendingUp } from "lucide-react";

function TopSales() {

  const nfts = [
    {
      id: 1,
      title: "Cosmic Warrior #8492",
      collection: "Space Warriors",
      price: "12.5 ETH",
      change: "+45%",
      image: "https://images8.alphacoders.com/691/thumb-1920-691567.jpg",
    },
    {
      id: 2,
      title: "Neon Ape King",
      collection: "Cyber Apes",
      price: "8.9 ETH",
      change: "+32%",
      image: "https://media.craiyon.com/2025-08-15/frT9XbUYRVOVkx_4vBQRew.webp",
    },
    {
      id: 3,
      title: "Digital Dreams #2301",
      collection: "Dream Collection",
      price: "15.2 ETH",
      change: "+58%",
      image: "https://digitaldreams.app/images/pic03.jpg",
    },
    {
      id: 4,
      title: "Abstract Mind",
      collection: "Modern Art",
      price: "6.7 ETH",
      change: "+28%",
      image: "https://png.pngtree.com/thumb_back/fh260/background/20251210/pngtree-conceptual-image-of-a-businessman-s-mind-connecting-to-digital-data-image_20787449.webp",
    },
    {
      id: 5,
      title: "Pixel Punk #7789",
      collection: "CyberPunk",
      price: "10.3 ETH",
      change: "+41%",
      image: "https://www.technikart.com/wp-content/uploads/2024/04/pixel-punk.jpg",
    },
    {
      id: 6,
      title: "Galaxy Explorer",
      collection: "Space Collection",
      price: "7.8 ETH",
      change: "+36%",
      image: "https://www.brickfanatics.com/wp-content/uploads/2022/08/LEGO-ICONS-10497-Galaxy-Explorer-alternate-build-2.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-purple-600" />
            <h1 className="text-5xl font-bold">Top Sales</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl">
            Discover the hottest NFTs trending right now. Updated in real-time.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nfts.map((nft, index) => (
              <div
                key={nft.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold z-10">
                    #{index + 1}
                  </div>
                  <img
                    src={nft.image}
                    alt=""
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-1">{nft.collection}</p>
                  <h3 className="text-xl font-bold mb-4">{nft.title}</h3>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="text-2xl font-bold">{nft.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Change</p>
                      <p className="text-xl font-bold text-green-500">{nft.change}</p>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-100 text-black px-8 py-3 rounded-xl font-medium hover:bg-gray-200 transition">
              Load More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TopSales;