import React from 'react';
import { Play } from 'lucide-react';
import { Playlist } from '../types/music';

interface PlaylistCardProps {
  playlist: Playlist;
  onClick: (playlist: Playlist) => void;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist, onClick }) => {
  return (
    <div 
      className="group bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer"
      onClick={() => onClick(playlist)}
    >
      <div className="relative mb-4">
        <img
          src={playlist.imageUrl}
          alt={playlist.name}
          className="w-full aspect-square object-cover rounded-md"
        />
        <button className="absolute bottom-2 right-2 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-105">
          <Play className="text-black ml-1" size={20} />
        </button>
      </div>
      
      <div className="text-white">
        <h3 className="font-semibold text-sm mb-1 truncate">{playlist.name}</h3>
        <p className="text-gray-400 text-xs line-clamp-2">{playlist.description}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;