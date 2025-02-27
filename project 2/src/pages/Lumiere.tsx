import React from 'react';

const Lumiere: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Chromatic Resonance",
      year: "2023",
      description: "An exploration of light frequencies and their interaction with architectural space.",
      imageUrl: "https://images.unsplash.com/photo-1611462985358-60d3498e0364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Luminous Passages",
      year: "2022",
      description: "A series of light corridors creating transitional experiences between spaces.",
      imageUrl: "https://images.unsplash.com/photo-1548141344-9cf12b7c1db0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Spectral Shadows",
      year: "2021",
      description: "Investigating the relationship between light sources, objects, and the shadows they cast.",
      imageUrl: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">lumière</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Exploring the properties and possibilities of light as an artistic medium, creating immersive experiences that transform perception.
        </p>
      </header>

      <div className="space-y-16">
        {projects.map((project) => (
          <div key={project.id} className="space-y-6">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <span className="text-gray-400">{project.year}</span>
              </div>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lumiere;