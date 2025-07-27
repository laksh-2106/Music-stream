import React from 'react';
import { ChevronLeft, ChevronRight, Search, User } from 'lucide-react';

interface TopBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <button className="w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-75 transition-all">
            <ChevronLeft size={20} />
          </button>
          <button className="w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-75 transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for songs, artists, or albums..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-96 pl-10 pr-4 py-2 bg-white rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="bg-green-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-300 transition-colors">
          Upgrade
        </button>
        <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-500 transition-colors">
          <User size={20} />
        </button>
      </div>
    </div>
  );
};

export default TopBar;