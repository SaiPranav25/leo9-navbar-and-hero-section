import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ClientLogos from './components/ClientLogos';
import FloatingChat from './components/FloatingChat';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <ClientLogos />
      <FloatingChat />
      
      {/* Scroll indicator */}
      <div className="fixed left-6 bottom-6 hidden lg:block">
        <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default App;