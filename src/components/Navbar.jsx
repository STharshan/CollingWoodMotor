import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Theme from './Theme';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown if clicked outside (for desktop dropdown)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        // Future dropdown logic
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md dark:bg-[#242427]/95 text-white font-sans font-medium shadow-lg leading-tight">
      {/* Optional shine effect */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 to-black/80" />

      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-1">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="h-16 object-contain" />

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 text-sm tracking-wide">
          <a href="/" className="hover:text-[#028BFA] py-1">HOME</a>
          <a href="/about" className="hover:text-[#028BFA] py-1">ABOUT</a>
          <a href="/gallery" className="hover:text-[#028BFA] py-1">GALLERY</a>
          <a href="/pricing" className="hover:text-[#028BFA] py-1">PRICING</a>
          <a href="/services" className="hover:text-[#028BFA] py-1">SERVICES</a>
        </div>

        {/* Theme toggle */}
        <div className="block">
          <Theme />
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 border border-white rounded-full"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden mt-2 px-4 pb-4 text-white bg-[#242427]/95 dark:bg-[#242427]/95 text-sm leading-tight space-y-3">
          <a href="/" className="block border-b border-gray-500 pb-2 hover:text-[#028BFA]">HOME</a>
          <a href="/about" className="block border-b border-gray-500 pb-2 hover:text-[#028BFA]">ABOUT</a>
          <a href="/gallery" className="block border-b border-gray-500 pb-2 hover:text-[#028BFA]">GALLERY</a>
          <a href="/pricing" className="block border-b border-gray-500 pb-2 hover:text-[#028BFA]">PRICING</a>
          <a href="/services" className="block border-b border-gray-500 pb-2 hover:text-[#028BFA]">SERVICES</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
