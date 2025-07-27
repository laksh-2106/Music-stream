import React from 'react';
import { Play, Pause, Heart } from 'lucide-react';
import { Song } from '../types/music';

interface SongCardProps {
  song: Song;
  isPlaying: boolean;
  onPlay: (song: Song) => void;
  onPause: () => void;
}

const SongCard: React.FC<SongCardProps> = ({ song, isPlaying, onPlay, onPause }) => {
  return (
    <div className="group bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer">
      <div className="relative mb-4">
        <img
          src={song.imageUrl}
          alt={song.title}
          className="w-full aspect-square object-cover rounded-md"
        />
        <button
          onClick={() => isPlaying ? onPause() : onPlay(song)}
          className="absolute bottom-2 right-2 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-105"
        >
          {isPlaying ? <Pause className="text-black" size={20} /> : <Play className="text-black ml-1" size={20} />}
        </button>
      </div>
      
      <div className="text-white">
        <h3 className="font-semibold text-sm mb-1 truncate">{song.title}</h3>
        <p className="text-gray-400 text-xs truncate">{song.artist}</p>
      </div>
      
      <div className="flex items-center justify-between mt-3">
        <span className="text-gray-400 text-xs">{song.year}</span>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Heart size={16} />
        </button>
      </div>
    </div>
  );
};

export default SongCard;