import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';
import MusicPlayer from './components/MusicPlayer';
import { mockSongs, mockPlaylists } from './data/mockData';
import { Song, Playlist } from './types/music';

function App() {
  const [showApp, setShowApp] = useState(false);
  const [activeCategory, setActiveCategory] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter songs based on category and search
  const filteredSongs = useMemo(() => {
    let songs = mockSongs;

    // Filter by category
    if (activeCategory === 'bollywood') {
      songs = songs.filter(song => song.category === 'bollywood');
    } else if (activeCategory === 'punjabi') {
      songs = songs.filter(song => song.category === 'punjabi');
    } else if (activeCategory === 'haryanvi') {
      songs = songs.filter(song => song.category === 'haryanvi');
    }

    // Filter by search query
    if (searchQuery) {
      songs = songs.filter(song =>
        song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.album.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return songs;
  }, [activeCategory, searchQuery]);

  const handlePlay = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    const index = filteredSongs.findIndex(s => s.id === song.id);
    setCurrentIndex(index);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % filteredSongs.length;
    setCurrentIndex(nextIndex);
    setCurrentSong(filteredSongs[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = currentIndex === 0 ? filteredSongs.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setCurrentSong(filteredSongs[prevIndex]);
  };

  const handlePlaylistClick = (playlist: Playlist) => {
    setActiveCategory(playlist.category);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchQuery('');
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query) {
      setActiveCategory('search');
    }
  };

  const handleGetStarted = () => {
    setShowApp(true);
  };

  if (!showApp) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar onGetStarted={handleGetStarted} />
        <Hero onGetStarted={handleGetStarted} />
        <Features />
        <Pricing />
        <Footer />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        <div className="flex-1 flex flex-col">
          <TopBar 
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
          <MainContent
            activeCategory={activeCategory}
            songs={filteredSongs}
            playlists={mockPlaylists}
            currentSong={currentSong}
            isPlaying={isPlaying}
            onPlay={handlePlay}
            onPause={handlePause}
            onPlaylistClick={handlePlaylistClick}
          />
        </div>
      </div>
      <MusicPlayer
        currentSong={currentSong}
        isPlaying={isPlaying}
        onPlay={handlePlayPause}
        onPause={handlePlayPause}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
}

export default App;