import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-[#111827] flex justify-center items-center px-6 w-full font-semibold">
      <Link href="/">
        <div className="text-2xl font-bold">
          <span className="text-[#F9FAFB]" style={{ fontFamily: 'Arial, sans-serif' }}>Lab</span>
          <span className="text-[#F59E0B]" style={{ fontFamily: 'Courier New, monospace' }}>Hacker</span>
        </div>
      </Link>
      <div className="px-4 min-w-[50%] backdrop-filter backdrop-blur-lg justify-end flex gap-6">
        <Link href="/about" className="text-[#F9FAFB] hover:text-[#F59E0B]">Home</Link>
        <Link href="/about" className="text-[#F9FAFB] hover:text-[#F59E0B]">About</Link>
        <Link href="/about" className="text-[#F9FAFB] hover:text-[#F59E0B]">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
