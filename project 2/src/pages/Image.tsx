import React from 'react';

const Image: React.FC = () => {
  const images = [
    {
      id: 1,
      title: "Reflections",
      year: "2023",
      description: "A  exploring the interplay of light and water surfaces in urban environments.",
      imageUrl: "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Geometric Abstractions",
      year: "2022",
      description: "Photographic studies of architectural forms and patterns found in contemporary buildings.",
      imageUrl: "https://images.unsplash.com/photo-1518893063132-36e46dbe2428?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Nocturnal",
      year: "2021",
      description: "Night photography exploring the transformation of spaces after dark through long exposures and light painting.",
      imageUrl: "https://images.unsplash.com/photo-1502657877623-f66bf489d236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Transient",
      year: "2020",
      description: "Capturing fleeting moments of light and shadow in natural landscapes.",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">image</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Photography and digital imagery that captures moments and perspectives, exploring composition, light, and form.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image) => (
          <div key={image.id} className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img 
                src={image.imageUrl} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div>
              <div className="flex justify-between items-baseline">
                <h2 className="text-xl font-semibold">{image.title}</h2>
                <span className="text-gray-400 text-sm">{image.year}</span>
              </div>
              <p className="text-gray-300 text-sm mt-1">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;