import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12 py-10">
      <div className="flex items-center space-x-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
        </h1>
        <div className="h-154 w-154 md:h-152 md:w-152">
          <img 
            src="/src/pages/GIF_silouhette.gif" 
            alt="Silhouette animation" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;