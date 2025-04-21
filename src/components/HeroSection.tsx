import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
          alt="Gym interior"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-16 md:py-32">
        <div className="max-w-2xl">
          <div className="animate-fadeIn">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              Transform Your Body, <br className="hidden sm:block" />
              <span className="text-emerald-500">Transform Your Life</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg">
              Join APEX Fitness and discover a premium gym experience designed to help you reach your fitness goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#join" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 transform hover:scale-105 text-center"
              >
                Join Now
              </a>
              <a 
                href="#tour" 
                className="bg-transparent border-2 border-white hover:border-emerald-500 text-white hover:text-emerald-500 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 text-center"
              >
                Take a Tour
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 flex items-center justify-center">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;