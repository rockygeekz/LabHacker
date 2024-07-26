
import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className=" bg-lime-100 shadow-lg">
      <div className="container  mx-auto   p-4 flex justify-center items-center">
            <Link href="/" >        
            <div className="text-2xl  font-bold">
          <span className="text-black" style={{ fontFamily: 'Arial, sans-serif' }}>Lab</span>
          <span className="text-amber-950" style={{ fontFamily: 'Courier New, monospace' }}>Hacker</span>
        </div>
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="text-black hover:text-yellow-300">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-yellow-300">
            About
          </Link>
          <Link href="/contact" className="text-black hover:text-yellow-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
