"use client";
import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 py-4 w-full font-semibold" style={{ backgroundColor: 'var(--bg-color)' }}>
      <Link href="/">
        <div className="text-2xl font-bold">
          <span style={{ color: 'var(--text-color)', fontFamily: 'Arial, sans-serif' }}>Lab</span>
          <span style={{ color: 'var(--highlight-color)', fontFamily: 'Courier New, monospace' }}>Hacker</span>
        </div>
      </Link>
      <div className="flex space-x-4 text-sm sm:text-base">
        <Link href="/" className="hover:text-[var(--highlight-color)]" style={{ color: 'var(--text-color)' }}>Home</Link>
        <Link href="/" className="hover:text-[var(--highlight-color)]" style={{ color: 'var(--text-color)' }}>About</Link>
        <Link href="https://chat.whatsapp.com/KZDLqsXCdTW4k5CVj1vF7S" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--highlight-color)]" style={{ color: 'var(--text-color)' }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
