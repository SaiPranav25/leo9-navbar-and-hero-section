import React from 'react';

const ClientLogos: React.FC = () => {
  const logos = [
    { name: 'Huggies', width: 'w-20' },
    { name: 'Eton Solutions', width: 'w-24' },
    { name: 'Kimirica', width: 'w-24' },
    { name: 'Indium', width: 'w-20' },
    { name: 'Choice', width: 'w-20' },
    { name: 'Star', width: 'w-16' },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">Your trusted UI UX design agency.</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className={`${logo.width} h-12 bg-gray-400 rounded flex items-center justify-center text-white font-semibold text-sm`}>
                {logo.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;