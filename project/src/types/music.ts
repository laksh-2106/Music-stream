export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  imageUrl: string;
  audioUrl: string;
  category: 'bollywood' | 'punjabi' | 'haryanvi';
  year: number;
  isPlaying?: boolean;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  songs: Song[];
  category: string;
}