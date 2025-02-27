import React from 'react';
import { Play } from 'lucide-react';

const Video: React.FC = () => {
  const videos = [
    {
      id: 1,
      title: "Temporal Fragments",
      duration: "12:34",
      year: "2023",
      description: "A visual essay on memory and the perception of time, featuring layered imagery and rhythmic editing.",
      thumbnailUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Liminal",
      duration: "08:47",
      year: "2022",
      description: "An exploration of transitional spaces and states of being, shot in various urban environments at dawn and dusk.",
      thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Resonance",
      duration: "15:21",
      year: "2021",
      description: "A study of sound visualization through digital and analog techniques, exploring the relationship between audio and visual patterns.",
      thumbnailUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">video</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Time-based works exploring narrative, movement, and visual composition through the medium of video.
        </p>
      </header>

      <div className="space-y-16">
        {videos.map((video) => (
          <div key={video.id} className="space-y-6">
            <div className="relative aspect-video overflow-hidden rounded-lg group">
              <img 
                src={video.thumbnailUrl} 
                alt={video.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-4 bg-accent/90 rounded-full transform transition-transform duration-300 hover:scale-110">
                  <Play size={24} fill="white" />
                </button>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-sm">
                {video.duration}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h2 className="text-2xl font-semibold">{video.title}</h2>
                <span className="text-gray-400">{video.year}</span>
              </div>
              <p className="text-gray-300">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;