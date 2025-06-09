import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Viona Angelica
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 font-light">
                <span className="text-purple-400">Programmer</span>
                <span className="text-gray-500 mx-2">|</span>
                <span className="text-pink-400">Ilustrator</span>
                <span className="text-gray-500 mx-2">|</span>
                <span className="text-cyan-400">Content Creator</span>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
              Menggabungkan teknologi dan kreativitas untuk menciptakan pengalaman digital yang menakjubkan. 
              Spesialis dalam pengembangan web, ilustrasi digital, dan konten multimedia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Lihat Proyek
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Hubungi Saya
              </button>
            </div>
          </div>

          {/* 3D Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10">
              <spline-viewer 
                className="robot-3d w-full h-full" 
                url="https://prod.spline.design/1dcxapFMBHoCIfHs/scene.splinecode"
              ></spline-viewer>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;