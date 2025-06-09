import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and</span>
            <Code2 className="w-4 h-4 text-purple-400" />
            <span>by Viona Angelica</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2024 Viona Angelica. All rights reserved.
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            "Technology meets Artistry - Creating digital experiences that inspire and engage"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;