// components/LoadingHacker.js
"use client";
import React from 'react';

function LoadingHacker() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#000000] text-[#00FF00] p-4">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-spin-slow text-[#00FF00]">
          <span role="img" aria-label="skull">
            💀
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-[#00FF00]">Loading...</h1>
      </div>
    </div>
  );
}

export default LoadingHacker;
