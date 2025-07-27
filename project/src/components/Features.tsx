import React from 'react';
import { Download, Shuffle, Heart, Radio, Mic, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Download,
      title: 'Offline Listening',
      description: 'Download your favorite songs and listen offline anywhere, anytime.',
      color: 'text-green-400'
    },
    {
      icon: Shuffle,
      title: 'Smart Playlists',
      description: 'AI-powered playlists that adapt to your music taste and mood.',
      color: 'text-blue-400'
    },
    {
      icon: Heart,
      title: 'Personalized',
      description: 'Get recommendations based on your listening history and preferences.',
      color: 'text-red-400'
    },
    {
      icon: Radio,
      title: 'Live Radio',
      description: 'Tune into live radio stations from across India and beyond.',
      color: 'text-purple-400'
    },
    {
      icon: Mic,
      title: 'Podcasts',
      description: 'Discover trending podcasts and exclusive audio content.',
      color: 'text-yellow-400'
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Support for Hindi, Punjabi, Haryanvi, and many more languages.',
      color: 'text-pink-400'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-green-400">MusicStream</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience music like never before with our cutting-edge features designed for Indian music lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="mb-6">
                  <Icon className={`w-12 h-12 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;