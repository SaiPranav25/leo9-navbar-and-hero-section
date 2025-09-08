import React from 'react';
import NetworkAnimation from './NetworkAnimation';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-white pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Network Animation */}
          <div className="relative h-96 lg:h-[500px]">
            <NetworkAnimation />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block font-black">Design</span>
                <span className="block font-black">Transform</span>
                <span className="block font-black">Accelerate</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-700 max-w-lg leading-relaxed font-medium">
                Redefining user experiences through
                <br />
                Behavioural Science & AI
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;