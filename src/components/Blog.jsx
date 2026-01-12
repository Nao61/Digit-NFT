import React from "react";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

function Blog() {
  const featuredPost = {
    title: "The Future of NFTs: What's Next in 2026?",
    excerpt: "Explore the emerging trends and technologies shaping the next generation of digital collectibles and blockchain art.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop",
    author: "Sarah Johnson",
    date: "Jan 5, 2026",
    readTime: "8 min read",
    category: "Trends",
  };

  const posts = [
    {
      id: 1,
      title: "Understanding NFT Royalties: A Complete Guide",
      excerpt: "Learn how creators earn ongoing revenue from their digital art through smart contract royalties.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop",
      author: "Michael Chen",
      date: "Jan 3, 2026",
      readTime: "6 min read",
      category: "Education",
    },
    {
      id: 2,
      title: "Top 10 NFT Collections to Watch This Month",
      excerpt: "Discover the hottest NFT drops and collections gaining momentum in the marketplace.",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&h=400&fit=crop",
      author: "Emma Davis",
      date: "Dec 30, 2025",
      readTime: "5 min read",
      category: "Reviews",
    },
    {
      id: 3,
      title: "How to Protect Your NFT Investments",
      excerpt: "Essential security tips and best practices for safeguarding your digital assets.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&h=400&fit=crop",
      author: "Alex Thompson",
      date: "Dec 28, 2025",
      readTime: "7 min read",
      category: "Security",
    },
    {
      id: 4,
      title: "NFT Gaming: The Intersection of Play and Earn",
      excerpt: "Explore how blockchain gaming is revolutionizing the way we play and earn rewards.",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=600&h=400&fit=crop",
      author: "David Lee",
      date: "Dec 25, 2025",
      readTime: "9 min read",
      category: "Gaming",
    },
    {
      id: 5,
      title: "Building Your NFT Portfolio: Tips for Beginners",
      excerpt: "A step-by-step guide to starting your NFT collection journey with confidence.",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&h=400&fit=crop",
      author: "Lisa Wang",
      date: "Dec 22, 2025",
      readTime: "6 min read",
      category: "Guides",
    },
    {
      id: 6,
      title: "The Environmental Impact of NFTs Explained",
      excerpt: "Understanding the carbon footprint and sustainable solutions in the NFT space.",
      image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&h=400&fit=crop",
      author: "James Wilson",
      date: "Dec 20, 2025",
      readTime: "8 min read",
      category: "Sustainability",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-orange-50 to-pink-50 py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-orange-600" />
            <h1 className="text-5xl font-bold">Our Blog</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl">
            Stay updated with the latest insights, trends, and stories from the NFT world.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-10 flex flex-col justify-center">
                <span className="text-purple-600 font-semibold text-sm mb-3">
                  {featuredPost.category}
                </span>
                <h2 className="text-4xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 text-lg mb-6">{featuredPost.excerpt}</p>

                <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition w-fit">
                  Read Article
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold mb-10">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <button className="text-black font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-100 text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get the latest NFT insights delivered directly to your inbox every week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full outline-none text-gray-900"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;