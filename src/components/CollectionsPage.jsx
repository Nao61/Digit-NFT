import React, { useState } from "react";
import { Layers, Users, TrendingUp } from "lucide-react";

function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState("All categories");

  const categories = ["All categories", "Art", "Celebrities", "Gaming", "Sport", "Music"];

  const collections = [
    {
      id: 1,
      name: "CyberPunk 2077",
      creator: "Digital Dreams",
      items: 10000,
      floor: "2.5 ETH",
      volume: "15,234 ETH",
      banner: "https://gaming-cdn.com/images/products/14769/orig/cyberpunk-2077-ultimate-edition-ultimate-edition-pc-game-gog-com-cover.jpg?v=1748447646",
      avatar: "https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg",
      verified: true,
    },
    {
      id: 2,
      name: "Dardust Boli",
      creator: "Upper Crew",
      items: 8500,
      floor: "1.8 ETH",
      volume: "12,456 ETH",
      banner: "https://yt3.googleusercontent.com/2U3rxZslPaxVuqmlpgq66_v7geO4tSdpz6JBWu0KnEYx4T6OHHiWo3eNay-FAR3LtYltJUi4g6Q=s900-c-k-c0x00ffffff-no-rj",
      avatar: "https://images.squarespace-cdn.com/content/v1/67471b66c3a3a46731887334/1732713323026-1AMQOIUHJQAKX83Z7R84/2402_DARDUST_Album2024_02_0098_5+STELLE.jpg",
      verified: true,
    },
    {
      id: 3,
      name: "Space Explorers",
      creator: "Cosmos Studio",
      items: 5000,
      floor: "3.2 ETH",
      volume: "18,921 ETH",
      banner: "https://www.sun-sentinel.com/wp-content/uploads/2024/05/TFL-L-The-Infinite-3-19-2022-Photographer-Melissa-Taylor-200-3-01.jpg?w=525",
      avatar: "https://img.freepik.com/photos-premium/astronaute-mignon-jouant-flaque-espace-icone-vectoriel-dessin-anime-illustration-science-technologie-icone-concept-isole-premium-vector-flat-style-dessins-animes_839035-1421210.jpg",
      verified: true,
    },
    {
      id: 4,
      name: "Abstract Minds",
      creator: "Art Collective",
      items: 3000,
      floor: "1.5 ETH",
      volume: "8,234 ETH",
      banner: "https://png.pngtree.com/thumb_back/fh260/background/20251210/pngtree-conceptual-image-of-a-businessman-s-mind-connecting-to-digital-data-image_20787449.webp",
      avatar: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=100&h=100&fit=crop",
      verified: false,
    },
    {
      id: 5,
      name: "Music Legends",
      creator: "Sound Wave",
      items: 7500,
      floor: "2.1 ETH",
      volume: "11,567 ETH",
      banner: "https://www.creativefabrica.com/wp-content/uploads/2022/08/07/Sound-wave-Music-recording-Graphics-35682990-1.jpg",
      avatar: "https://w0.peakpx.com/wallpaper/212/684/HD-wallpaper-sound-wave-music-neon-rainbow-song-soundwave-thumbnail.jpg",
      verified: true,
    },
    {
      id: 6,
      name: "Pixel Warriors",
      creator: "8-Bit Studio",
      items: 12000,
      floor: "0.9 ETH",
      volume: "6,789 ETH",
      banner: "https://motionbgs.com/media/5648/retro-pixel-warrior.jpg",
      avatar: "https://files.idyllic.app/files/static/2651259?width=256&optimizer=image",
      verified: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-8 h-8 text-blue-600" />
            <h1 className="text-5xl font-bold">Explore Collections</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl">
            Browse through our curated NFT collections from top creators worldwide.
          </p>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="container mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center gap-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={collection.banner}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 relative">
                  <div className="absolute -top-12 left-6">
                    <img
                      src={collection.avatar}
                      alt=""
                      className="w-20 h-20 rounded-full border-4 border-white"
                    />
                  </div>

                  <div className="mt-10">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold">{collection.name}</h3>
                      {collection.verified && (
                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-gray-500 mb-6">by {collection.creator}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-1 text-gray-500 mb-1">
                          <Layers size={14} />
                          <span className="text-xs">Items</span>
                        </div>
                        <p className="font-semibold">{collection.items.toLocaleString()}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-gray-500 mb-1">
                          <TrendingUp size={14} />
                          <span className="text-xs">Floor</span>
                        </div>
                        <p className="font-semibold">{collection.floor}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-gray-500 mb-1">
                          <Users size={14} />
                          <span className="text-xs">Volume</span>
                        </div>
                        <p className="font-semibold">{collection.volume}</p>
                      </div>
                    </div>

                    <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                      View Collection
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-100 text-black px-8 py-3 rounded-2xl font-medium hover:bg-gray-200 transition">
              Load More Collections
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CollectionsPage;