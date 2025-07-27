import React from 'react';
import { Play, Music, Users, Headphones } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <Music className="w-20 h-20 mx-auto mb-6 text-green-400" />
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            MusicStream
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the best of Indian music - from Bollywood hits to Punjabi beats and Haryanvi rhythms. 
            Stream millions of songs with crystal clear quality.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button
            onClick={onGetStarted}
            className="group bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
          >
            <Play className="w-6 h-6" />
            <span>Start Listening Free</span>
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <Music className="w-12 h-12 mx-auto mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2">50M+ Songs</h3>
            <p className="text-gray-400">Massive collection of Indian music</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">10M+ Users</h3>
            <p className="text-gray-400">Join millions of music lovers</p>
          </div>
          <div className="text-center">
            <Headphones className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">HD Quality</h3>
            <p className="text-gray-400">Crystal clear audio streaming</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;