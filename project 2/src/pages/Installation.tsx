import React from 'react';

const Installation: React.FC = () => {
  const installations = [
    {
      id: 1,
      title: "Spatial Harmonics",
      location: "",
      year: "",
      description: "A site-specific installation exploring the acoustic and visual properties of space through suspended geometric forms and directional lighting.",
      imageUrl: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Threshold",
      location: "Centre Pompidou, Paris",
      year: "2022",
      description: "An interactive installation examining the boundaries between physical and digital space through projection mapping and motion sensors.",
      imageUrl: "https://images.unsplash.com/photo-1571292098320-997aa03a5d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">installation</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Site-specific works that transform spaces and engage viewers in immersive experiences, challenging perceptions of environment and presence.
        </p>
      </header>

      <div className="space-y-20">
        {installations.map((installation) => (
          <div key={installation.id} className="grid md:grid-cols-2 gap-8">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src={installation.imageUrl} 
                alt={installation.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">{installation.title}</h2>
                <div className="text-gray-400 mt-1">
                  {installation.location}, {installation.year}
                </div>
              </div>
              <p className="text-gray-300">{installation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;