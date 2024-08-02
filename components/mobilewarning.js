// components/MobileWarning.js
"use client";
import Link from "next/link";
import React from "react";

function MobileWarning() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#000000] text-[#00FF00] p-4">
      <div className="text-center">
        <div className="text-6xl mb-4 text-[#00FF00]">
          <span role="img" aria-label="skull">
            💀
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-[#00FF00]">Warning!</h1>
        <p className="text-lg mb-4">
          This site is best viewed on a desktop. Please open it on a desktop
          device for the best experience.
        </p>
        <Link href="/danger">
          <button 
            className="px-4 py-2 mt-4 font-bold text-red-500 bg-[#00FF00] border-2 border-[#00FF00] rounded-md hover:bg-[#00FF00] hover:text-black transition-all duration-300 animate-pulse"
          >
            View Anyway!💀
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MobileWarning;
