import { Song, Playlist } from '../types/music';

export const mockSongs: Song[] = [
  // Bollywood Songs
  {
    id: '1',
    title: 'Tum Hi Ho',
    artist: 'Arijit Singh',
    album: 'Aashiqui 2',
    duration: '4:22',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '#',
    category: 'bollywood',
    year: 2013
  },
  {
    id: '2',
    title: 'Kesariya',
    artist: 'Arijit Singh',
    album: 'Brahmastra',
    duration: '4:28',
    imageUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '#',
    category: 'bollywood',
    year: 2022
  },
  {
    id: '3',
    title: 'Raataan Lambiyan',
    artist: 'Jubin Nautiyal, Asees Kaur',
    album: 'Shershaah',
    duration: '3:15',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '#',
    category: 'bollywood',
    year: 2021
  },
  // Punjabi Songs
  {
    id: '4',
    title: 'Brown Munde',
    artist: 'AP Dhillon',
    album: 'Brown Munde',
    duration: '3:45',
    imageUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '#',
    category: 'punjabi',
    year: 2020
  },
  {
    id: '5',
    title: 'Excuses',
    artist: 'AP Dhillon',
    album: 'Two Hearts Never Die',
    duration: '3:12',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '#',
    category: 'punjabi',
    year: 2021
  },
  {
    id: '6',
    title: 'Goat',
    artist: 'Sidhu Moose Wala',
    album: 'Goat',
    duration: '2:55',
    imageUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '#',
    category: 'punjabi',
    year: 2020
  },
  // Haryanvi Songs
  {
    id: '7',
    title: 'Solid Body',
    artist: 'Masoom Sharma',
    album: 'Solid Body',
    duration: '3:30',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '#',
    category: 'haryanvi',
    year: 2022
  },
  {
    id: '8',
    title: 'Bahu Kale Ki',
    artist: 'Raju Punjabi',
    album: 'Bahu Kale Ki',
    duration: '4:05',
    imageUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
    audioUrl: '#',
    category: 'haryanvi',
    year: 2021
  }
];

export const mockPlaylists: Playlist[] = [
  {
    id: 'p1',
    name: 'Bollywood Hits',
    description: 'The biggest Bollywood songs right now',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'bollywood',
    songs: mockSongs.filter(song => song.category === 'bollywood')
  },
  {
    id: 'p2',
    name: 'Punjabi Top 50',
    description: 'Most popular Punjabi tracks',
    imageUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'punjabi',
    songs: mockSongs.filter(song => song.category === 'punjabi')
  },
  {
    id: 'p3',
    name: 'Haryanvi Beats',
    description: 'Best Haryanvi music collection',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'haryanvi',
    songs: mockSongs.filter(song => song.category === 'haryanvi')
  }
];