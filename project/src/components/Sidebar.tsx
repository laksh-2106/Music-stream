import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'library', label: 'Your Library', icon: Library },
  ];

  const playlists = [
    { id: 'bollywood', label: 'Bollywood Hits' },
    { id: 'punjabi', label: 'Punjabi Top 50' },
    { id: 'haryanvi', label: 'Haryanvi Beats' },
    { id: 'liked', label: 'Liked Songs' },
  ];

  return (
    <div className="w-64 bg-black text-white p-6 flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-green-400">MusicStream</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-4 mb-8">
          {categories.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onCategoryChange(item.id)}
                  className={`flex items-center space-x-3 w-full text-left p-2 rounded-md transition-colors ${
                    activeCategory === item.id ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mb-4">
          <button className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors p-2">
            <Plus size={20} />
            <span>Create Playlist</span>
          </button>
          <button className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors p-2">
            <Heart size={20} />
            <span>Liked Songs</span>
          </button>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Playlists</h3>
          <ul className="space-y-2">
            {playlists.map((playlist) => (
              <li key={playlist.id}>
                <button
                  onClick={() => onCategoryChange(playlist.id)}
                  className={`text-sm w-full text-left p-2 rounded transition-colors ${
                    activeCategory === playlist.id ? 'text-white bg-gray-800' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {playlist.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;