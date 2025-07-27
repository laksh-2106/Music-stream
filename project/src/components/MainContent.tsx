import React from 'react';
import { Song, Playlist } from '../types/music';
import SongCard from './SongCard';
import PlaylistCard from './PlaylistCard';

interface MainContentProps {
  activeCategory: string;
  songs: Song[];
  playlists: Playlist[];
  currentSong: Song | null;
  isPlaying: boolean;
  onPlay: (song: Song) => void;
  onPause: () => void;
  onPlaylistClick: (playlist: Playlist) => void;
}

const MainContent: React.FC<MainContentProps> = ({
  activeCategory,
  songs,
  playlists,
  currentSong,
  isPlaying,
  onPlay,
  onPause,
  onPlaylistClick
}) => {
  const getCategoryTitle = () => {
    switch (activeCategory) {
      case 'bollywood':
        return 'Bollywood Hits';
      case 'punjabi':
        return 'Punjabi Top 50';
      case 'haryanvi':
        return 'Haryanvi Beats';
      case 'search':
        return 'Search Results';
      default:
        return 'Good evening';
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  if (activeCategory === 'home') {
    return (
      <div className="flex-1 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8">{getGreeting()}</h1>
        
        {/* Featured Playlists */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Made for you</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                playlist={playlist}
                onClick={onPlaylistClick}
              />
            ))}
          </div>
        </section>

        {/* Recently Played */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recently played</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {songs.slice(0, 6).map((song) => (
              <SongCard
                key={song.id}
                song={song}
                isPlaying={currentSong?.id === song.id && isPlaying}
                onPlay={onPlay}
                onPause={onPause}
              />
            ))}
          </div>
        </section>

        {/* Popular Artists */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Popular artists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {songs.slice(3, 9).map((song) => (
              <SongCard
                key={song.id}
                song={song}
                isPlaying={currentSong?.id === song.id && isPlaying}
                onPlay={onPlay}
                onPause={onPause}
              />
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-8">{getCategoryTitle()}</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {songs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            isPlaying={currentSong?.id === song.id && isPlaying}
            onPlay={onPlay}
            onPause={onPause}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;