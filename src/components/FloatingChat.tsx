import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center overflow-hidden">
                  <span className="text-lg">🦁</span>
                </div>
                <div>
                  <h3 className="font-semibold">Leo9 Studio</h3>
                  <p className="text-xs opacity-90">Digital Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="bg-gray-100 rounded-lg p-3 text-sm">
              <p>👋 Hello! How can we help you transform your digital experience today?</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-purple-100 text-purple-700 text-xs px-3 py-2 rounded-lg hover:bg-purple-200 transition-colors">
                Get Quote
              </button>
              <button className="bg-blue-100 text-blue-700 text-xs px-3 py-2 rounded-lg hover:bg-blue-200 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white group-hover:animate-pulse" />
        )}
      </button>
    </div>
  );
};

export default FloatingChat;