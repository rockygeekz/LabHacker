import React from 'react';

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#111827] text-[#F9FAFB] p-4">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-spin-slow">
          <span role="img" aria-label="skull">
            💀
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-[#EF4444]">Loading...</h1>
      </div>
    </div>
  );
}

export default Loading;
