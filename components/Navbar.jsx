import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-[#111827] flex justify-between items-center px-4 sm:px-6 py-4 w-full font-semibold">
      <Link href="/">
        <div className="text-2xl font-bold">
          <span className="text-[#F9FAFB]" style={{ fontFamily: 'Arial, sans-serif' }}>Lab</span>
          <span className="text-[#F59E0B]" style={{ fontFamily: 'Courier New, monospace' }}>Hacker</span>
        </div>
      </Link>
      <div className="flex space-x-4 text-sm sm:text-base">
        <Link href="/" className="text-[#F9FAFB] hover:text-[#F59E0B]">Home</Link>
        <Link href="/" className="text-[#F9FAFB] hover:text-[#F59E0B]">About</Link>
        <Link href="/" className="text-[#F9FAFB] hover:text-[#F59E0B]">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
