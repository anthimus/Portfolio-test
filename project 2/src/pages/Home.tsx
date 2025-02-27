import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-[75vw] md:max-w-[85vw] lg:max-w-[90vw] aspect-square relative mb-8">
        <img 
          src="/GIF_silouhette.gif" 
          alt="Silhouette animation" 
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center">
        anthime
      </h1>
    </div>
  );
};

export default Home;