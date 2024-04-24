"use client"
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';

const SecondNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md">{/* rounded */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
        >
          <HiMenu size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="border-t border-gray-300 pt-4 text-black">
            <li className="py-2">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="hidden md:block mt-0">
        <ul className="flex space-x-4 text-black">{/* justify-center, ml, gap */}
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SecondNav;