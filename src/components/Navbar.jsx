import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black px-4 text-white font-semibold">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src="/logo.avif" alt="Logo" className="h-20 object-contain ml-15" />

        {/* Desktop Menu */}
        <div className="hidden xl:flex space-x-8 mr-100">
          <a href="/about" className="hover:text-yellow-400">ABOUT</a>
          <a href="/gallery" className="hover:text-yellow-400">GALLERY</a>
          <a href="/pricing" className="hover:text-yellow-400">PRICING</a>

          {/* Desktop Dropdown (click-based) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDesktopDropdown(!desktopDropdown)}
              className="hover:text-yellow-400 flex items-center"
            >
              SERVICES AND MORE{" "}
              {desktopDropdown ? (
                <FaChevronUp className="ml-1 mt-1 text-xs" />
              ) : (
                <FaChevronDown className="ml-1 mt-1 text-xs" />
              )}
            </button>

            {desktopDropdown && (
              <div className="absolute top-full mt-4 right-0 w-[400px] bg-white text-black px-6 py-4 rounded-lg shadow-xl z-50">
                <div className="flex space-x-6">
                  <div className="space-y-2 pr-20">
                    <a href="/" className="hover:text-yellow-600 block">Home</a>
                    <a href="/about" className="hover:text-yellow-600 block">About</a>
                    <a href="/services" className="hover:text-yellow-600 block">Services</a>
                    <a href="/gallery" className="hover:text-yellow-600 block">Gallery</a>
                  </div>
                  <div className="border-l border-gray-300"></div>
                  <div className="space-y-2 pl-4">
                    <a href="/pricing" className="hover:text-yellow-600 block">Pricing</a>
                  </div>
                </div>
              </div>
            )}
          </div>
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
        <div className="xl:hidden mt-3 px-4 pb-6 space-y-4 text-white bg-black">
          <a href="/about" className="block border-b pb-2">ABOUT</a>
          <a href="/gallery" className="block border-b pb-2">GALLERY</a>
          <a href="/pricing" className="block border-b pb-2">PRICING</a>

          {/* Mobile Dropdown */}
          <div className="border-b pb-3">
            <div
              onClick={() => setMobileDropdown(!mobileDropdown)}
              className="flex justify-between items-center cursor-pointer uppercase"
            >
              <span>SERVICES AND MORE</span>
              {mobileDropdown ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {mobileDropdown && (
              <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
                <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
                <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="/services" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
