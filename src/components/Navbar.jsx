import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Theme from '../../../AutoCraft/src/components/Theme';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown if clicked outside (for desktop dropdown)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md dark:bg-[#242427]/95 dark:backdrop-blur-md text-white font-semibold shadow-lg">
      {/* Optional: Shine/gradient overlay for dark mode */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 to-black/80" />

      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <img src="/logo.avif" alt="Logo" className="h-20 object-contain ml-15" />

        {/* Desktop Menu */}
        <div className="hidden xl:flex space-x-8">
          <a href="/about" className="hover:text-blue-400">ABOUT</a>
          <a href="/gallery" className="hover:text-blue-400">GALLERY</a>
          <a href="/pricing" className="hover:text-blue-400">PRICING</a>

          {/* Desktop Dropdown (click-based) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDesktopDropdown(!desktopDropdown)}
              className="hover:text-blue-400 flex items-center"
            >
              SERVICES AND MORE{" "}
              {desktopDropdown ? (
                <FaChevronUp className="ml-1 mt-1 text-xs" />
              ) : (
                <FaChevronDown className="ml-1 mt-1 text-xs" />
              )}
            </button>

            {desktopDropdown && (
              <div className="absolute top-full mt-4 right-0 w-[400px] bg-white dark:bg-[#242427] text-black dark:text-white px-6 py-4 rounded-lg shadow-xl">
                <div className="flex space-x-6">
                  <div className="space-y-2 pr-20">
                    <a href="/" className="hover:text-blue-400 block">Home</a>
                    <a href="/about" className="hover:text-blue-400 block">About</a>
                    <a href="/services" className="hover:text-blue-400 block">Services</a>
                    <a href="/gallery" className="hover:text-blue-400 block">Gallery</a>
                  </div>
                  <div className="border-l border-gray-300 dark:border-gray-600"></div>
                  <div className="space-y-2 pl-4">
                    <a href="/pricing" className="hover:text-blue-400 block">Pricing</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Theme toggle (desktop) */}
        <div className="block">
          <Theme />
        </div>

        {/* Hamburger Icon */}
        <div className="xl:hidden">
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
        <div className="xl:hidden mt-3 px-4 pb-6 space-y-4 text-white bg-[#242427]/95 dark:bg-[#242427]/95">
          <a href="/about" className="block border-b border-gray-400 pb-2 hover:text-blue-400">ABOUT</a>
          <a href="/gallery" className="block border-b border-gray-400 pb-2 hover:text-blue-400">GALLERY</a>
          <a href="/pricing" className="block border-b border-gray-400 pb-2 hover:text-blue-400">PRICING</a>

          {/* Mobile Dropdown */}
          <div className="border-b border-gray-400 pb-3">
            <div
              onClick={() => setMobileDropdown(!mobileDropdown)}
              className="flex justify-between items-center cursor-pointer uppercase"
            >
              <span>SERVICES AND MORE</span>
              {mobileDropdown ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {mobileDropdown && (
              <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
                <a href="/" onClick={() => setMenuOpen(false)} className='hover:text-blue-400'>Home</a>
                <a href="/pricing" onClick={() => setMenuOpen(false)} className='hover:text-blue-400'>Pricing</a>
                <a href="/about" onClick={() => setMenuOpen(false)} className='hover:text-blue-400'>About</a>
                <a href="/services" onClick={() => setMenuOpen(false)} className='hover:text-blue-400'>Services</a>
                <a href="/gallery" onClick={() => setMenuOpen(false)} className='hover:text-blue-400'>Gallery</a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
