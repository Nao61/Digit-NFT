import React from "react";
import { Target, Users, Award, Heart } from "lucide-react";

function AboutUs() {


  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "Pushing boundaries in blockchain technology and digital ownership.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Empowering creators and collectors through collaboration.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering premium experiences with attention to every detail.",
    },
    {
      icon: Heart,
      title: "Transparency",
      description: "Building trust through open communication and fair practices.",
    },
  ];

  const stats = [
    { value: "100K+", label: "Active Users" },
    { value: "50K+", label: "NFTs Traded" },
    { value: "$500M+", label: "Trading Volume" },
    { value: "150+", label: "Featured Artists" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">About Digit</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            We're building the future of digital ownership, connecting creators and collectors
            in a decentralized marketplace.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Digit, we believe in empowering creators and collectors through blockchain
                technology. Our platform provides a secure, transparent, and user-friendly
                marketplace for digital assets.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We're committed to democratizing access to digital art and collectibles,
                ensuring that everyone can participate in the NFT revolution regardless of
                their technical expertise.
              </p>
              <p className="text-lg text-gray-600">
                Our vision is to become the most trusted and innovative NFT marketplace,
                setting new standards for quality, security, and community engagement.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop"
                alt="Our Mission"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-8 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold mb-2">3+ Years</p>
                <p className="text-lg">Leading the NFT space</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-xl text-purple-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of the digital revolution. Start creating, collecting, and trading NFTs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition text-lg">
              Get Started
            </button>
            <button className="bg-gray-100 text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;