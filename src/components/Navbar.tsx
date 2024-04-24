"use client"
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <nav className="bg-#5b21b6 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12">
          <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
        </div>
        <span className="text-xl font-bold">M&R Solution</span>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 rounded-full px-4 py-2 pl-8 focus:outline-none"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {isFullScreen ? (
          <AiOutlineFullscreenExit
            className="text-3xl cursor-pointer"
            onClick={toggleFullScreen}
          />
        ) : (
          <AiOutlineFullscreen
            className="text-3xl cursor-pointer"
            onClick={toggleFullScreen}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
